import Assignment from "./Assignment.js";
import AssignmentTag from "./AssignmentTag.js";
import Panel from './Panel.js';

export default {
    components: { Assignment, AssignmentTag, Panel },
    template: `
        <panel theme="dark" v-if="assignments.length" class="p-4 rounded-lg">
            <h2 class="font-bold mb-2 flex justify-between items-start">
                <div>
                    {{ title }}
                        
                    <span>({{ assignments.length }})</span>            
                </div>

                <button @click="$emit('toggle')" v-show="canToggle">&times;</button>
            </h2>

            <assignment-tag
                v-model:currentTag="initialTag"
                :assignments="assignments"
            \></assignment-tag>

            <ul class="border border-gray-600 divide-y divide-gray-600 mt-5">
                <assignment v-for="assignment in filteredAssignments" 
                :key="assignment.id" :assignment="assignment"
                ></assignment>
            </ul>

            <slot></slot>

            <template v-slot:footer>
                Contact Us anytime, anywhere
            </template>
        </panel> 
    `,

    data() {
        return {
            initialTag: 'all',
        }
    },

    props: {
        assignments: Array,
        title: String,
        canToggle: { type: Boolean, default: false }
    },

    computed: {
        filteredAssignments() {
            if (this.initialTag == 'all') {
                return this.assignments
            }
            return this.assignments.filter(a => a.tag === this.initialTag)
        }, 
    },
}