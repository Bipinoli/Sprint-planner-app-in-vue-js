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
            <div class="card-content section-content">
                <div class="section-inner">
                    <template v-for="story in stories">
                            <div class="drop-area" @dragover="allowDrag" @drop="drop" _allowsdrop="true" @dragenter="dragEnter" @dragleave="dragLeave"></div>
                            <sprint-story :key="story['key']" :title="story['title']" :number="story['number']" :urgency="story['urgency']" :drag_start_func="dragStart"></sprint-story>
                    </template>
                </div>
                <div class="big-drop-area" @dragover="allowDrag" @drop="drop" _allowsdrop="true" _bigdroparea="true" @dragenter="dragEnter" @dragleave="dragLeave"></div>
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
            if (ev.target.getAttribute("_bigdroparea"))
                ev.target.classList.add('big-drop-area-highlight');
            else
                ev.target.classList.add('drop-area-highlight');
        },
        
        dragLeave(ev) {
            if (ev.target.getAttribute('_bigdroparea'))
                ev.target.classList.remove('big-drop-area-highlight');
            else
                ev.target.classList.remove('drop-area-highlight');
        },
        
        allowDrag(ev) {
            ev.preventDefault();
        },

        drop(ev) {
            // by using Vue's data driven approach
            // following code can be refactored so eliminate
            // need of manually traversing DOM tree
            // but for now I am too lazy to refactor this

            ev.preventDefault();
            let being_dragged = document.getElementById(ev.dataTransfer.getData("text"));
           
            let indexBefore = this.whichChildOfParent(being_dragged);
            let indexAfter = this.whichChildOfParent(ev.target);

            let sectionBefore = this.identifySection(being_dragged);
            let sectionAfter = this.identifySection(ev.target);
            
            // mutate store's state to reflect the transfer
            store.transferStoryAction(sectionBefore, sectionAfter, indexBefore, indexAfter+1);
            
            ev.target.classList.remove('drop-area-highlight');
            ev.target.classList.remove('big-drop-area-highlight');
        },

        whichChildOfParent(elem) {
            let index = -1;
            elem.setAttribute("_mark", true);
            for (let i=0; i<elem.parentElement.childElementCount; i++) {
                let child = elem.parentElement.children[i];
                if (child.classList.contains('sprint-story'))
                    index += 1;
                if (child.getAttribute('_mark')) {
                    elem.removeAttribute("_mark");
                    break;
                }
            }
            return index;
        },

        identifySection(elem) {
            // I coded this after researching the inner working of VueJS
            // but
            // it will be better to refactor this method 
            // to be independent of inner working of VueJS
            // so that it won't break when some thing inside of 
            // vue changes

            // return key of the parentComponent to identify the story section
            if ('__vue__' in elem) {
                let parentComponent = elem.__vue__.$parent;
                return parentComponent.$vnode.key;
            }

            while ( !('__vue__' in elem) ) {
                elem = elem.parentElement;
            }
            return elem.__vue__.$vnode.key;
        },

    }
});