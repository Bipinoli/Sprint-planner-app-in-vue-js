let store = {
   state: {
        shouldAddStory: false,
   },
   setShouldAddStoryAction(val) {
       this.state.shouldAddStory = val;
       console.log("STORE: shouldAddStory mutated with value: ", val);
   }
}