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
   transferStoryAction(from, to, indexBefore, indexAfter) {
       let story = this.state.db[from].splice(indexBefore, 1)[0];
       this.state.db[to].splice(indexAfter, 0, story);
   }
}