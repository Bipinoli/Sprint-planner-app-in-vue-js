Vue.component("story-adder", {
    template: `
    <div class="modal-2">
        <div class="modal-background"></div>
        <div class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title">Add new Story</p>
                <button class="delete" aria-label="close"></button>
            </header>
            <section class="modal-card-body">
            
                <div>
                <textarea class="textarea" placeholder="Title"></textarea>
                </div>
                
                <div class="select">
                    <select name="urgency" id="_urgency">
                    <option value="urgent">Urgent</option>
                    <option value="important">Important</option>
                    <option value="normal" selected>Normal</option>
                    </select>
                </div>

                <div>
                    <input class="input" type="text" placeholder="Story Number">
                </div>

                <div class="select">
                    <select name="story-points" id="_story_points">
                    <option value="1">1</option>
                    <option value="2" selected>2</option>
                    <option value="3">3</option>
                    </select>
                </div>

                <div>
                    <p>Assign To</p>
                    <div class="select">
                        <select name="assignee" id="_assignee">
                            <option value="ronald">Ronald</option>
                        </select>
                    </div>
                </div>


            </section>
            <footer class="modal-card-foot">
                <button class="button is-success">Add</button>
                <button class="button">Cancel</button>
            </footer>
        </div>
    </div>
    `,
});