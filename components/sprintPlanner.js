var backLog = [
    {
        'urgency': 'normal',
        'assignee': 'img/face2.jpg',
        'number': '#MR-121',
        'title': 'Study the atomospheric composition of Mars for possible settlement and agricultural innovation',
        'points': 3
    },
    {
        'urgency': 'urgent',
        'assignee': 'img/face2.jpg',
        'number': '#MR-122',
        'title': 'Careful caracterization of gravitaional vortex in Mars and its satellite',
        'points': 2
    },
    {
        'urgency': 'medium',
        'assignee': 'img/face2.jpg',
        'number': '#MR-123',
        'title': 'Final testing of Rover technology before ready to launch',
        'points': 1
    },
];


Vue.component('sprint-planner', {
    template: `
        <div id="sprint-planner" class="columns">
            <template v-for="section in sections">
                <sprint-section :title="section['name']" :stories="section['content']" :specialbtn="section['special-btn']" @add-story="addStory"></sprint-section>
            </template>
            <story-adder></story-adder>
        </div>
    `,
    data: function() {
        return {
            'sections': [
                {
                    'name': 'back-log',
                    'content': backLog,
                    'special-btn': true
                },
                {
                    'name': 'todo',
                    'content': backLog
                },
                {
                    'name': 'in-progress',
                    'content': backLog
                },
                {
                    'name': 'Ready For Acceptance',
                    'content': backLog
                },
                {
                    'name': 'Completed',
                    'content': backLog
                },
            ],
        };
    },
    methods: {
        addStory() {
            store.setShouldAddStoryAction(true);
        },
    }
});