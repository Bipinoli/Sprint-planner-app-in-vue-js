Vue.component('sprint-planner', {
    template: `
        <div id="sprint-planner" class="columns">
            <template v-for="section in sections">
                <sprint-section :key="section['name']" :title="section['name']" :stories="section['content']" :specialbtn="section['special-btn']" @add-story="addStoryAction"></sprint-section>
            </template>
            <story-adder @new-story="newStory"></story-adder>
        </div>
    `,
    data: function() {
        return {
            'sections': [
                {   
                    'name': 'back-log',
                    'content': backLog,
                    'special-btn': true,
                },
                {
                    'name': 'todo',
                    'content': todo
                },
                {
                    'name': 'in-progress',
                    'content': inProgress
                },
                {
                    'name': 'Ready For Acceptance',
                    'content': rfa
                },
                {
                    'name': 'Completed',
                    'content': completed
                },
            ],
        };
    },
    methods: {
        addStoryAction() {
            store.setShouldAddStoryAction(true);
        },
        newStory(story) {
            story['key'] = 'story_' + String(Date.now()) + String(Math.floor(Math.random() * 100000000));
            backLog.unshift(story);
        }
    }
});