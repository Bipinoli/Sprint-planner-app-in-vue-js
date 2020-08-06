Vue.component("story-adder", {
    template: `
    <div class="modal" :class="{'is-active': visibilityState['shouldAddStory']}">
        <div class="modal-background"></div>
        <div class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title">Add new Story</p>
                <button class="delete" @click="cancel" aria-label="close"></button>
            </header>
            <section class="modal-card-body">
            
                <div class="card-body-content">
                    <textarea class="textarea" placeholder="Title" v-model="title"></textarea>
                </div>
                
                <div class="row card-body-content"">

                    <div class="row">
                        <p>Urgency</p>
                        <div class="select">
                            <select name="urgency" id="_urgency" v-model="urgency">
                                <option value="urgent">Urgent</option>
                                <option value="important">Important</option>
                                <option value="normal" selected>Normal</option>
                            </select>
                        </div>
                    </div>

                    <div class="row">
                        <p>Story Points</p>
                        <div class="select">
                            <select name="story-points" id="_story_points" v-model="points">
                                <option value="1">1</option>
                                <option value="2" selected>2</option>
                                <option value="3">3</option>
                            </select>
                        </div>
                    </div>
                
                </div>


                <div class="card-body-content row">
                    <div>
                        <input class="input" type="text" placeholder="Story Number" v-model="number">
                    </div>

                    <div class="row">
                        <p>Assign To</p>
                        <div class="select">
                            <select name="assignee" id="_assignee" v-model="assignee">
                                <option value="ronald">Ronald</option>
                            </select>
                        </div>
                    </div>
                </div>


            </section>
            <footer class="modal-card-foot">
                <button class="button is-success" @click="submit">Add</button>
                <button class="button" @click="cancel">Cancel</button>
            </footer>
        </div>
    </div>
    `,
    data: function() {
        return {
            title: null,
            urgency: null,
            points: null,
            number: null,
            assignee: null,
            visibilityState: store.state,
        };
    },
    methods: {
        reset() {
            this.title = null;
            this.urgency = null;
            this.points = null;
            this.number = null;
            this.assignee = null;
        },
        cancel() {
            this.reset();
            store.setShouldAddStoryAction(false);
        },
        submit() {
            this.$emit("new-story", {
                title: this.title,
                urgency: this.urgency,
                points: this.points,
                number: this.number,
                assignee: this.assignee
            });
        }
    },
});