import * as types from './mutation-types'

export default{
	//增加总时间
	[types.ADD_TOTAL_TIME](state, time){
		state.totalTime = state.totalTime + time
	},

	//减少总时间
	[types.DEC_TOTAL_TIME](state, time){
		state.totalTime = state.totalTime - time
	},


	//增加计划
	[types.SAVE_PLAN](state, plan){
		const avatar = 'https://sfault-avatar.b0.upaiyun.com/147/223/147223148-573297d0913c5_huge256';
		state.list.push(
				Object.assign({ name: 'EE' ,avatar: avatar }, plan)
			)
	},

	//删除计划
	[types.DELETE_PLAN](state, idx){
		state.list.splice(idx, 1)
	},
}