Vue.component("sprint-section", {
    props: ['title', 'stories'],
    template: `
        <div class="sprint-section column card">
            <header class="card-header">
                <p class="card-header-title sprint-section-title">
                    {{title}}
                </p>
            </header>
            <div class="card-content">
               <template v-for="story in stories">
                    <div class="drop-area" ondragover="allowDrag(event)" ondrop="drop(event)" _allowsdrop="true" ondragenter="dragEnter(event)" ondragleave="dragLeave(event)"></div>
                    <sprint-story :title="story['title']" :urgency="story['urgency']"></sprint-story>
               </template>
               <div class="drop-area" ondragover="allowDrag(event)" ondrop="drop(event)" _allowsdrop="true" ondragenter="dragEnter(event)" ondragleave="dragLeave(event)"></div>
            </div>
        </div>
    `,
});