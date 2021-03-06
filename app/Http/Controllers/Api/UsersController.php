<?php

namespace App\Http\Controllers\Api;


use App\Helpers\Image\PhotosManager;
use App\Transformers\UserTransformer;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Input;
use Validator;
use App\Models\User;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class UsersController extends ApiController
{

    public function __construct()
    {
        parent::__construct();
        $this->middleware('auth.api');
    }

    public function show(User $user)
    {

        return Auth::user();
    }


    /**
     * @api {post} /v1/follow 关注其他用户或取消关注
     * @apiGroup Follow
     * @apiPermission none
     * @apiParam {int} id 关注用户的id
     * @apiHeaderExample {json} Header-Example:
     *    {
     *       "Authorization" : "Bearer {token}"
     *    }
     * @apiVersion 0.0.0
     * @apiSuccessExample {json} Success-Response:
     *     {
     *           "status": "success",
     *           "code": 200,
     *           "message": "取消关注成功",
     *       }
     * @apiErrorExample {json} Error-Response:
     *     {
     *      "status": "error",
     *      "code": 400,
     *      "message": "用户不存在"
     *      }
     */
    public function doFollow(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'id'     => 'required|exists:users'
        ],[
            'id.required' => '用户的id不能为空',
            'id.exists' => '用户不存在'
        ]);
        if ($validator->fails()) {
            return $this->respondWithFailedValidation($validator);
        }

        $user_id = $request->id;

        if (Auth::id() == $user_id){
            return $this->respondWithError('自己不能关注自己');
        }

        if (Auth::user()->isFollowing($user_id)){
            Auth::user()->unfollow($user_id);
            return $this->respondWithMessage('取消关注成功');
        }else{
            Auth::user()->follow($user_id);

            // 添加通知事件
            // todo

            return $this->respondWithMessage('关注成功');
        }

    }


    /**
     * @api {get} /v1/users/:id/following 获取所有我关注的人
     * @apiGroup Follow
     * @apiHeaderExample {json} Header-Example:
     *    {
     *       "Authorization" : "Bearer {token}"
     *    }
     * @apiPermission none
     * @apiParam {int} id 获取用户的id
     * @apiParam {int} [limit] 每页默认返回的数量
     * @apiParam {int} [page] 不传默认返回第1页
     * @apiVersion 0.0.0
     * @apiSuccessExample {json} Success-Response:
     *     {
     *       "status": "success",
     *      "code": 200,
     *      "data": [
     *          {
     *          "id": 45,
     *          "nickname": "江玉梅",
     *          "email": "est.eos@example.org",
     *          "avatar": "http://lorempixel.com/400/400/?18527",
     *          "gender": "未设置"
     *          }
     *      ],
     *      "pagination": {
     *      "total": 9,
     *      "count": 1,
     *      "per_page": 1,
     *      "current_page": 1,
     *      "total_pages": 9
     *      }
     *    }
     */
    public function following(User $user)
    {
        $limit = Input::get('limit') ?: 15;
        $users = $user->followings()->orderBy('id', 'desc')->paginate($limit);

        return $this->respondWithPaginator($users,new UserTransformer);
    }

    /**
     * @api {get} /v1/users/:id/followers 获取所有关注我的人
     * @apiGroup Follow
     * @apiHeaderExample {json} Header-Example:
     *    {
     *       "Authorization" : "Bearer {token}"
     *    }
     * @apiPermission none
     * @apiParam {int} id 获取用户的id
     * @apiParam {int} [limit] 每页默认返回的数量
     * @apiParam {int} [page] 不传默认返回第1页
     * @apiVersion 0.0.0
     * @apiSuccessExample {json} Success-Response:
     *     {
     *       "status": "success",
     *      "code": 200,
     *      "data": [
     *          {
     *          "id": 45,
     *          "nickname": "江玉梅",
     *          "email": "est.eos@example.org",
     *          "avatar": "http://lorempixel.com/400/400/?18527",
     *          "gender": "未设置"
     *          }
     *      ],
     *      "pagination": {
     *      "total": 9,
     *      "count": 1,
     *      "per_page": 1,
     *      "current_page": 1,
     *      "total_pages": 9
     *      }
     *    }
     */
    public function followers(User $user)
    {
        $limit = Input::get('limit') ?: 15;
        $users = $user->followers()->orderBy('id', 'desc')->paginate($limit);
        return $this->respondWithPaginator($users,new UserTransformer);
    }

    /**
     * 更新用户信息
     *
     * @param Request $request
     * @param User $user
     * @return void
     */
    public function update(Request $request,User $user)
    {
        //验证数据
        $validator = Validator::make($request->all(), [
            'avatar'     => 'file|image'
        ],[
            'avatar.file' => '上传文件失败',
            'avatar.image' => '上传文件必须为图片格式'
        ]);
        if ($validator->fails()) {
            $errors = $validator->errors()->first();
            return $this->setStatusCode(400)->respondWithError($errors);
        }
        $this->authorize('update',$user);

        $data = array_filter([
            'nickname' => $request->nickname,
            'email' => $request->get('email'),
            'gender' => $request->gender
        ]);

        if ($request->hasFile('avatar')){
            $file = $request->file('avatar');

            $new_avatar = (new PhotosManager($file))->storeAvatar();
            $user->avatar = $new_avatar;
        }
        $user->update($data);

        $user->gender = $data['gender'];

        $user->save();
        return $this->respondWithMessage('用户信息更新成功'); 
    }



}
