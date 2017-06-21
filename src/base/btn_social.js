class buttonSocial extends HTMLElement{
	constructor(){
		super()
	}

	connectedCallBack(){

	}

	disconnectedCallBack(){

	}

	set proprerties(prop){
		this.label = prop.label
	}

	get label(){
		return this.labelContent
	}
}

export default buttonSocial