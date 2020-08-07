Vue.component("sprint-story", {
    props: ['urgency', 'assignee', 'number', 'title', 'points', 'drag_start_func'],
    template: `
    <div 
    :id='id'
    class="card sprint-story" draggable="true" @dragstart="dragStart"
    >
        <div class="urgency-meter" :class="urgencyClasses"></div>
        <div class="sprint-content">
            <div class="sprint-title">
                {{title}}
            </div>
            <div>
                <div class="sprint-tag" :class="tagClasses">
                    Mars exploration
                </div>
            </div>
            <div class="sprint-metrics">
                <div class="sprint-points">2</div>
                <div class="sprint-num-assignee">
                    <div class="sprint-number" v-if="number">{{number}}</div>
                    <div class="sprint-number" v-else>#TAD-231</div>
                    <div class="sprint-assignee">
                        <img src="img/face2.jpg">
                    </div>
                </div>
            </div>
        </div>
        
    </div>
    `,

    data: function() {
        return {
            'id': 'draggable_' + String(Date.now()) + String(Math.floor(Math.random() * 100000000)),
            urgencyClasses: {
                'urgency-urgent': this.urgency == 'urgent',
                'urgency-important': this.urgency == 'important',
                'urgency-normal': this.urgency == 'normal'
            },
            tagClasses: {
                'tag-urgent': this.urgency == 'urgent',
                'tag-important': this.urgency == 'important',
                'tag-normal': this.urgency == 'normal'
            }
        };
    },

    methods: {
        dragStart(ev) {
            this.drag_start_func(ev);
        }
    }
});