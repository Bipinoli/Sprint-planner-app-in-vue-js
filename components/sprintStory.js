Vue.component("sprint-story", {
    props: ['urgency', 'assignee', 'number', 'title', 'points'],
    template: `
    <div 
    :id='id'
    class="card sprint-story" draggable="true" ondragstart="dragStart(event)"
    >
        <div class="urgency-meter urgency-urgent"></div>
        <div class="sprint-content">
            <div class="sprint-title">
                {{title}}
            </div>
            <div>
                <div class="sprint-tag tag-urgent">
                    Mars exploration
                </div>
            </div>
            <div class="sprint-metrics">
                <div class="sprint-points">2</div>
                <div class="sprint-num-assignee">
                    <div class="sprint-number">#TAD-231</div>
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
            'id': 'draggable_' + String(Date.now()) + String(Math.floor(Math.random() * 100000000))
        };
    }
});