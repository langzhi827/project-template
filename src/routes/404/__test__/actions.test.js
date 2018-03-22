import { updateTitle, getList } from '../actions';
import constants from '../constants';

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('404 actions test', () => {
    it('创建一个更新标题的action', () => {
        const text = '404';
        const expectedAction = {
            type: constants.UPDATE_TITLE,
            payload: text
        };
        expect(updateTitle(text)).toEqual(expectedAction);
    });

    it('创建一个获取列表数据后更新列表数据的action', async () => {
        const initialState = {};
        const store = mockStore(initialState);

        const result = await store.dispatch(getList());
        const expectedActions = [{
            type: constants.UPDATE_LIST,
            payload: result
        }];
        expect(store.getActions()).toEqual(expectedActions)
    });
});