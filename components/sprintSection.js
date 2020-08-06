Vue.component("sprint-section", {
    props: ['title', 'stories', 'specialbtn'],
    template: `
        <div class="sprint-section column card">
            <header class="card-header">
                    <div v-if="specialbtn" class="card-header-title sprint-section-title sprint-section-title-with-btn">
                        <p>{{title}}</p>
                        <img v-if="specialbtn" src="img/hamburger.svg" width="26px"/>
                    </div>
                    <template v-else>
                        <p class="card-header-title sprint-section-title">{{title}}</p>
                    </template>
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