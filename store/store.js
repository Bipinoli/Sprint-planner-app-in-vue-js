let store = {
   state: {
        shouldAddStory: false,
        db: {
            backLog: backLog,
            todo: todo,
            inProgress: inProgress,
            rfa: rfa,
            completed: completed,
        }   
   },
   setShouldAddStoryAction(val) {
       this.state.shouldAddStory = val;
       console.log("STORE: shouldAddStory mutated with value: ", val);
   },
}