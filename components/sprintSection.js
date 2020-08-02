Vue.component("sprint-section", {
    template: `
        <div class="sprint-section column card">
            <header class="card-header">
                <p class="card-header-title sprint-section-title">
                    Back-Log
                </p>
            </header>
            <div class="card-content">
               <slot></slot>
            </div>
        </div>
    `,
});