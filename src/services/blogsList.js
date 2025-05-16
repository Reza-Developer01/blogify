import api from "@/configs/api";

const getBlogsList = async () => {
  try {
    const response = await api.get("blogs");
    return { response };
  } catch (error) {
    return { error };
  }
};

export { getBlogsList };
