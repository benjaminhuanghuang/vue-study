<script>
  export default {
    name: 'comment',
    // props
    props: ['id'],
    // state
    data () {
      return {
        open: true
      }
    },
    computed: {
      comment () {
        return this.$store.state.comments[this.id]   // use store
      }
    },
    methods: {
      pluralize: n => n + (n === 1 ? ' reply' : ' replies')
    }
  }
</script>

<script setup>
import { computed, ref} from 'vue'

const store = useStore();

// props
const props = defineProps({
  props: ['id'],
})

// state
const open = ref(true);

// computed
const comment = computed(() => store.state.comments[props.id]); // use store

// method
function pluralize(n) {
  return n + (n === 1 ? ' reply' : ' replies');
}
</script>
