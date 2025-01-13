<script>
export default {
    props: ['item']
}
</script>

<script setup>
const props = defineProps({
    item: {
        type: Object,
        required: true,
    }
});
</script>