<template>
  <div class="container-app">
    <div class="container-quiz">
      <div class="quiz-header">
        <h1>Quiz App</h1>
      </div>
      <div
        class="quiz-main"
        v-for="(element, index) in questions.slice(a, b)"
        :key="index"
        v-show="quiz"
      >
        <div class="box-question">
          <h2>Soru {{ b }}/{{ questions.length }}</h2>
          <p>{{ element.question }}</p>
        </div>
        <div class="box-suggestions">
          <ul>
            <li
              v-for="(item, index) in element.suggestions"
              :key="index"
              :class="select ? check(item) : ''"
              @click="selectResponse(item)"
            >
              {{ item.suggestion }}
            </li>
          </ul>
        </div>
      </div>
      <div class="box-score" v-if="score_show">
        <h2>Score</h2>
        <h2>{{ score }} / {{ questions.length }}</h2>
        <div class="btn-restart">
          <button @click="restartQuiz">
            Yeniden <i class="fas fa-sync-alt"></i>
          </button>
        </div>
      </div>
      <div class="quiz-footer">
        <div class="box-button">
          <button
            @click="skipQuestion"
            :style="!next ? 'background-color:rgb(106,128,202)' : ''"
          >
            Geç
          </button>
          <button
            @click="nextQuestion"
            :style="next ? 'background-color:rgb(106,128,202)' : ''"
          >
            Devam
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      questions: [
        {
          question: "JS kodu hangi etiketler içine yazılır ?",
          suggestions: [
            { suggestion: "<script>", correct: true },
            { suggestion: "<js>" },
            { suggestion: "<javascript>" },
            { suggestion: "<scripting>" },
          ],
        },
        {
          question: "Hangisi bir değişken olamaz ?",
          suggestions: [
            { suggestion: "vue2020" },
            { suggestion: "data" },
            { suggestion: "2020vue", correct: true },
            { suggestion: "JavaScript" },
          ],
        },
        {
          question: "Hangisi bir dizinin ilk indeksine ekleme yapar ?",
          suggestions: [
            { suggestion: "concat()" },
            { suggestion: "unshift()", correct: true },
            { suggestion: "push()" },
            { suggestion: "shut()" },
          ],
        },
        {
          question: "Hangisi false çıktısı verir ?",
          suggestions: [
            { suggestion: "3 == '3'" },
            { suggestion: "5 === '5'", correct: true },
            { suggestion: "'test' === 'test'" },
            { suggestion: "false === false" },
          ],
        },
        {
          question:
            "Vue componentlerine veri aktarmak için hangisi kullanılır ?",
          suggestions: [
            { suggestion: "setState" },
            { suggestion: "props", correct: true },
            { suggestion: "render" },
            { suggestion: "PropTypes" },
          ],
        },
      ],
      a: 0,
      b: 1,
      select: false,
      score: 0,
      quiz: true,
      score_show: false,
      next: false,
    };
  },
  methods: {
    selectResponse(e) {
      this.select = true;
      this.next = true;
      if (e.correct) {
        this.score++;
      }
    },
    check(status) {
      if (status.correct) {
        return "correct";
      } else {
        return "incorrect";
      }
    },
    nextQuestion() {
      if (!this.next) {
        return;
      }
      if (this.questions.length - 1 == this.a) {
        this.score_show = true;
        this.quiz = false;
      } else {
        this.a++;
        this.b++;
        this.select = false;
        this.next = false;
      }
    },
    skipQuestion() {
      if (this.next) {
        return;
      }
      if (this.questions.length - 1 == this.a) {
        this.score_show = true;
        this.quiz = false;
      } else {
        this.a++;
        this.b++;
      }
    },
    restartQuiz() {
      Object.assign(this.$data, this.$options.data());
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../style/style.scss";
</style>