import actionTypes from './actionTypes';
import fetch from '@/utils/fetch';
import api from '@/config/api';

/**
 * 修改title
 * @param title 新的标题
 * @returns {{type: string, payload: *}}
 */
export function updateTitle(title) {
    return {
        type: actionTypes.UPDATE_TITLE,
        payload: title
    };
}

/**
 * 更新列表
 * @param list
 * @returns {{type: string, payload: *}}
 */
export const updateList = (list) => {
    return {
        type: actionTypes.UPDATE_LIST,
        payload: list
    };
};

/**
 * 获取列表
 * @param params
 * @returns {Function}
 */
export const getList = (params) => {
    return async dispatch => {
        const result = await fetch(api.list);
        dispatch(updateList(result));
        return result;
    };
};
