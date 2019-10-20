const initState={
    projects:[
        {id: '1' ,title:'hello bitch',content:'blah blah blah'},
        {id: '2' ,title:'hello karma',content:'blah blah blah'},
        {id: '3' ,title:'hello babes',content:'blah blah blah'}

    ]
}

const ProjectReducer = (state = initState,action)=>{
    switch(Selection.type){
        case 'CREATE_PROJECT':
            console.log('created project',action.project)
    }
    return state
}
export default ProjectReducer