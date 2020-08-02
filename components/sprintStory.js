Vue.component("sprint-story", {
    props: ['urgency', 'assignee', 'number', 'description', 'points'],
    template: `
    <div class="card sprint-story">
        <div class="urgency-meter"></div>
        <div class="sprint-content">
            <div class="sprint-title">
                Engage Jupiter Express for cuter solar system travel
            </div>
            <div>
                <div class="sprint-tag">
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
});