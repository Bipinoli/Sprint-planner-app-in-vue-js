Vue.component('sprint-planner', {
    template: `
        <div id="sprint-planner" class="columns">
            <template v-for="section in sections">
                <sprint-section :key="section['name']" :title="section['name']"
                 :stories="contents[section['contentKey']]" :specialbtn="section['special-btn']"
                 @add-story="addStoryAction"
                ></sprint-section>
            </template>
            <story-adder @new-story="newStory"></story-adder>
        </div>
    `,
    data: function() {
        return {
            'sections': [
                {   
                    'name': 'back-log',
                    'special-btn': true,
                    'contentKey': 'backLog',
                },
                {
                    'name': 'todo',
                    'contentKey': 'todo',
                },
                {
                    'name': 'in-progress',
                    'contentKey': 'inProgress',
                },
                {
                    'name': 'Ready For Acceptance',
                    'contentKey': 'rfa',
                },
                {
                    'name': 'Completed',
                    'contentKey': 'completed',
                },
            ],
            'contents': store.state.db,
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