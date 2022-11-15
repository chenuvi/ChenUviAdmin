import { ref } from "vue";

export default function useVisible(initValue = true) {
  const visible = ref(initValue);
  const setVisible = (value: boolean) => {
    visible.value = value;
  };
  const toggleVisible = () => {
    visible.value = !visible.value;
  };
  return {
    visible,
    setVisible,
    toggleVisible,
  };
}
