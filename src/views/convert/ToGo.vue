<script setup lang="ts">
defineOptions({
  name: "ConvertToGo"
});
import { reactive, ref } from "vue";
import { Splitpanes, Pane } from "splitpanes";
import "splitpanes/dist/splitpanes.css";
import { convertGoApi } from "@/api/toGo.ts";
import { message } from "@/utils/message";
import { useClipboard } from "@vueuse/core";

const form = reactive({
  code: `
  public class Demo{
    private int a;
    public String b;
  }
  `
});
const convertedCode = ref("");

const sendAndConvert = () => {
  convertGoApi(form).then(resp => {
    console.log(resp);
    if (resp.code !== "200") {
      message("转换失败", { type: "warning" });
    } else {
      convertedCode.value = resp.data.join("\n");
    }
  });
};
const { _text, copy, copied, isSupported } = useClipboard({ convertedCode });
</script>

<template>
  <div style="padding: 10px">
    <splitpanes class="default-theme">
      <pane key="1" style="padding: 10px">
        <el-form :model="form" label-width="120px">
          <el-form-item label="Input Java Code">
            <el-input v-model="form.code" :rows="28" type="textarea" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="sendAndConvert()"
              >Convert</el-button
            >
          </el-form-item>
        </el-form>
      </pane>
      <pane key="2" style="padding: 10px">
        <el-button
          v-if="isSupported && convertedCode"
          @click="copy(convertedCode)"
        >
          <span v-if="!copied">Copy</span>
          <span v-else>Copied!</span>
        </el-button>
        <highlightjs autodetect :code="convertedCode" />
      </pane>
    </splitpanes>
  </div>
</template>

<style lang="scss" scoped></style>
