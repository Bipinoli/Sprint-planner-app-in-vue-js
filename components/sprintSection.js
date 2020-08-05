Vue.component("sprint-section", {
    props: [title, stories],
    template: `
        <div class="sprint-section column card">
            <header class="card-header">
                <p class="card-header-title sprint-section-title">
                    {{title}}
                </p>
            </header>
            <div class="card-content">
               <div class="card drop-area" ondragover="allowDrag(event)" ondrop="drop(event)" _allowsdrop="true" ondragenter="dragEnter(event)" ondragleave="dragLeave(event)"></div>
               <slot></slot>
            </div>
        </div>
    `,
});