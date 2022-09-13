import Assignments from '/components/Assignments.js';
import Panel from '/components/Panel.js';

export default {
    components: { Assignments, Panel },
    template: `
        <div class="grid gap-6">
            <assignments></assignments>
     
        </div>

    `,
}