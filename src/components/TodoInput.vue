<template>
    <div class="inputBox shadow">
        <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
        <!-- v-model: input에 입력된 값을 동적으로 뷰 인스턴스 안에 맵핑 -->
        <!-- <button v-on:click="addTodo" class="addBtn">add</button> -->
        <span class="addContainer" v-on:click="addTodo">
            <i class="fas fa-plus addBtn"></i>
        </span>

        <Modal v-if="showModal" @close="showModal = false">
            <!-- slot은 상위 컴포넌트에서 재정의해서 사용이 가능함 -->
            <h3 slot="header">
                경고!
                <i class="fas fa-times closeModalBtn" @click="closeModalBtn"></i>
            </h3>

            <h4 slot="body">내용을 입력하세요.</h4>

            <!-- <h5 slot="footer"></h5> -->
        </Modal>
    </div>
</template>

<script>
import Modal from './common/Modal.vue'

export default {
    data() {
        return {
            newTodoItem: "",
            showModal: false
        }
    },
    methods: {
        addTodo() {
            if (this.newTodoItem !== '') {
            this.$emit('addTodoItem', this.newTodoItem);
            this.clearInput();
            } else {
                this.showModal = !this.showModal;
            }
        },
        clearInput() {
            console.log("clearInput");
            this.newTodoItem = '';
        },
        closeModalBtn() {
            this.showModal = !this.showModal;
        }
    },
    components: {
        //속성명 축약
        Modal,
    }
}
</script>

<style scoped>
    input:focus {
        outline: none;
    }
    .inputBox {
        background: white;
        height: 50px;
        line-height: 50px;
        border-radius: 5px;
    }
    .inputBox input {
        border-style: none;
        font-size: 0.9rem;
    }
    .addContainer {
        float: right;
        background: linear-gradient(to right, #6478FB, #8763FB);
        display: block;
        width: 3rem;
        border-radius: 0 5px 5px 0;
    }
    .addContainer:hover {
        cursor: pointer;
    }
    .addBtn {
        color: white;
        vertical-align: middle;
    }
    .closeModalBtn {
        color: #42b983;
    }
    .closeModalBtn:hover {
        cursor: pointer;
    }
</style>
