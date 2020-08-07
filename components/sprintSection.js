Vue.component("sprint-section", {
    props: ['title', 'stories', 'specialbtn'],
    template: `
        <div class="sprint-section column card">
            <header class="card-header">
                    <div v-if="specialbtn" class="card-header-title sprint-section-title sprint-section-title-with-btn">
                        <p>{{title}}</p>
                        <img v-if="specialbtn" @click="addStory" src="img/hamburger.svg" width="26px"/>
                    </div>
                    <template v-else>
                        <p class="card-header-title sprint-section-title">{{title}}</p>
                    </template>
            </header>
            <div class="card-content">
               <template v-for="story in stories">
                    <div class="drop-area" @dragover="allowDrag" @drop="drop" _allowsdrop="true" @dragenter="dragEnter" @dragleave="dragLeave"></div>
                    <sprint-story :key="story['key']" :title="story['title']" :urgency="story['urgency']" :drag_start_func="dragStart"></sprint-story>
               </template>
               <div class="drop-area" @dragover="allowDrag" @drop="drop" _allowsdrop="true" @dragenter="dragEnter" @dragleave="dragLeave"></div>
            </div>
        </div>
    `,

    methods: {

        addStory() {
            this.$emit('add-story');
        },
        
        dragStart(ev) {
            let target = ev.target;
            while (target.id == '' || !target.id.includes('draggable'))
                target = target.parentElement;
            
            ev.dataTransfer.setData("text/plain", target.id);
        },
        
        dragEnter(ev) {
            if (ev.target.getAttribute("_allowsdrop")) {
                ev.target.classList.add('drop-area-highlight');
            }
        },
        
        dragLeave(ev) {
            if (ev.target.getAttribute("_allowsdrop")) {
                ev.target.classList.remove('drop-area-highlight');
            }
        },
        
        allowDrag(ev) {
            ev.preventDefault();
            if (ev.target.getAttribute("_allowsdrop")) {
                ev.dataTransfer.dropEffect = "all"; // allow to drop there
            }
            else {
                ev.dataTransfer.dropEffect = "none"; // don't allow drop
            }
        },

        drop(ev) {
            ev.preventDefault();
            let beging_dragged = document.getElementById(ev.dataTransfer.getData("text"));
           
            let drop_area_2_drag = null;
            beging_dragged.setAttribute("_mark", true);
            for (let i=0; i<beging_dragged.parentElement.childElementCount; i++) {
                if (beging_dragged.parentElement.children[i].getAttribute('_mark')) {
                    drop_area_2_drag = beging_dragged.parentElement.children[i-1];
                    beging_dragged.removeAttribute("_mark");
                    break;
                }
            }

            // move the story along with droppable area just above it into new location
            ev.target.parentElement.insertBefore(beging_dragged, ev.target);
            ev.target.parentElement.insertBefore(drop_area_2_drag, beging_dragged);

            ev.target.classList.remove('drop-area-highlight');
        },

    }
});