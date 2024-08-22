import { ILikeAction } from "./ILikesAction";
import { LikesEnum } from "./LikesEnum";

export const LikesReducer = (state: string[] = [], action: ILikeAction) => {
    switch (action.type) {
        case LikesEnum.LIKE_ADD:
            return [...state, action.payload]
        case LikesEnum.LIKE_REMOVE:
                const newArr = Object.assign([], state)
                const index = newArr.findIndex(item => item === action.payload)
                if (index > -1) {
                    newArr.splice(index, 1)
                }
                return newArr
        default:
            return state
    }
}