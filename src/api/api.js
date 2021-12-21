import request from '@/utils/request';
const { post, get } = request;

// 获取分校列表
export function getSchool(params) {
  return get({
    url: 'statistic/schools',
    params
  });
}
