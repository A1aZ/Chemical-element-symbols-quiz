/**
 * @copyright 2020 alanzoe.com
 */
var element_symbols = [
    {
        "symbol": "H",
        "correct": "氢",
        "others": ["轻", "氦", "氧", "氮", "氯"]
    },
    {
        "symbol": "He",
        "correct": "氦",
        "others": ["氢", "氧", "氩", "汞", "氮"]
    },
    {
        "symbol": "C",
        "correct": "碳",
        "others": ["钙", "炭", "铜", "氮", "氧"]
    },
    {
        "symbol": "N",
        "correct": "氮",
        "others": ["钠", "氧", "氢", "氦", "氯"]
    },
    {
        "symbol": "O",
        "correct": "氧",
        "others": ["氢", "碳", "氮", "氦", "氯"]
    },
    {
        "symbol": "Na",
        "correct": "钠",
        "others": ["氮", "纳", "镁", "钙", "铜"]
    },
    {
        "symbol": "Mg",
        "correct": "镁",
        "others": ["锰", "汞", "铜", "铁", "钾"]
    },
    {
        "symbol": "Al",
        "correct": "铝",
        "others": ["银", "氯", "钡", "锌", "锰"]
    },
    {
        "symbol": "Si",
        "correct": "硅",
        "others": ["硫", "磷", "碳", "氯", "铜"]
    },
    {
        "symbol": "P",
        "correct": "磷",
        "others": ["硫", "碳", "钾", "氮", "氧"]
    },
    {
        "symbol": "S",
        "correct": "硫",
        "others": ["硅", "碳", "氧", "磷", "氮"]
    },
    {
        "symbol": "Cl",
        "correct": "氯",
        "others": ["铝", "绿", "铜", "钙", "碳"]
    },
    {
        "symbol": "K",
        "correct": "钾",
        "others": ["钠", "钙", "氮", "氧", "磷"]
    },
    {
        "symbol": "Ca",
        "correct": "钙",
        "others": ["铜", "碳", "钾", "钡", "铁"]
    },
    {
        "symbol": "Fe",
        "correct": "铁",
        "others": ["铜", "镁", "铝", "锌", "银"]
    },
    {
        "symbol": "Cu",
        "correct": "铜",
        "others": ["铝", "氯", "碳", "钙", "锌"]
    },
    {
        "symbol": "Ag",
        "correct": "银",
        "others": ["汞", "镁", "铝", "铁", "钠"]
    },
    {
        "symbol": "Hg",
        "correct": "汞",
        "others": ["银", "氦", "氢", "镁", "铜"]
    },
    {
        "symbol": "Mn",
        "correct": "锰",
        "others": ["镁", "猛", "铁", "锌", "银"]
    },
    {
        "symbol": "Zn",
        "correct": "锌",
        "others": ["锰", "辛", "钠", "镁", "铝"]
    },
    {
        "symbol": "Ba",
        "correct": "钡",
        "others": ["钙", "钯", "汞", "铁", "铜"]
    },
]

var element_names = [
    { "name": "氢", "correct": "H", "others": ["Hg", "He", "C", "N", "O"] },
    { "name": "氦", "correct": "He", "others": ["he", "HE", "Hi", "H", "Ha"] },
    { "name": "碳", "correct": "C", "others": ["T", "N", "P", "c", "K"] },
    { "name": "氮", "correct": "N", "others": ["D", "n", "Ne", "Na", "O"] },
    { "name": "氧", "correct": "O", "others": ["o", "N", "H", "S", "C"] },
    { "name": "钠", "correct": "Na", "others": ["na", "NA", "Ne", "N", "Mg"] },
    { "name": "镁", "correct": "Mg", "others": ["Me", "Fe", "Hg", "Na", "Ag"] },
    { "name": "铝", "correct": "Al", "others": ["Cl", "AL", "Lv", "Ai", "CL"] },
    { "name": "硅", "correct": "Si", "others": ["Gi", "P", "S", "SI", "N"] },
    { "name": "磷", "correct": "P", "others": ["N", "S", "Si", "C", "O"] },
    { "name": "硫", "correct": "S", "others": ["P", "Si", "s", "O", "N"] },
    { "name": "氯", "correct": "Cl", "others": ["Lv", "Al", "CL", "Ca", "Cu"] },
    { "name": "钾", "correct": "K", "others": ["Ca", "Fe", "Mg", "Zn", "k"] },
    { "name": "钙", "correct": "Ca", "others": ["Zn", "Ga", "Fe", "K", "Na"] },
    { "name": "铁", "correct": "Fe", "others": ["Mg", "Cu", "Hg", "Ag", "Ba"] },
    { "name": "铜", "correct": "Cu", "others": ["Ca", "Cl", "Au", "CU", "Ca"] },
    { "name": "银", "correct": "Ag", "others": ["Hg", "Au", "Al", "Fe", "Zn"] },
    { "name": "汞", "correct": "Hg", "others": ["He", "Ag", "Cu", "Al", "Mg"] },
    { "name": "锰", "correct": "Mn", "others": ["Mg", "Me", "Hg", "Ag", "Cu"] },
    { "name": "锌", "correct": "Zn", "others": ["Fe", "Cu", "Mg", "Al", "Hg"] },
    { "name": "钡", "correct": "Ba", "others": ["Be", "Ｂ", "Ca", "Zn", "Cu"] }
]

let questions = []
let question_index = null

var app = new Vue({
    el: '#app',
    data: {
        start_screen: true,
        start_screen_data: {
            text: "元素符号小测试",
            description: "选择模式",
            btn: [
                { title: "元素符号 > 元素名称" },
                { title: "元素名称 > 元素符号" },
            ]
        },
        mode: null,
        question: null,
        answer:null,
        question_result: null,
        next_question: null,
        check_result: null,
        results: null,
        right_answers: 0,
        total: 0,
        btn_reset: "重新开始",
    },
    methods: {
        startQuizSymbol: function () {
            this.mode = 'symbol'
            this.startQuiz()
        },
        startQuizName: function () {
            this.mode = 'name'
            this.startQuiz()
        },
        startQuiz: function () {
            this.start_screen = false
            if (this.mode == 'symbol') {
                question_list = Object.keys(element_symbols)
            } else {
                question_list = Object.keys(element_names)
            }
            let length = question_list.length
            let random = 0
            questions = []
            while (length > 0) {
                random = parseInt(Math.random() * length)
                questions.push(question_list[random])
                question_list[random] = question_list[--length]
            }
            this.nextQuestion()
        },
        nextQuestion: function () {
            this.next_question = null
            this.answer = null
            if (questions.length == 0) {
                return
            }
            question_index = parseInt(questions.pop())
            this.question = {}
            let _question = {}
            if (this.mode == 'symbol') {
                _question = element_symbols[question_index]
                this.question.title = _question.symbol
            } else {
                _question = element_names[question_index]
                this.question.title = _question.name
            }
            this.question.correct = _question.correct
            let options = this.shuffle(_question.others)
            options = options.slice(0, 3)
            options.push(this.question.correct)
            options = this.shuffle(options)
            this.question.options = options
            this.question_result = null
        },
        answerQuestion: function (answer, e) {
            if (this.question_result) return;
            this.answer = answer
            if (answer == this.question.correct) {
                this.right_answers++
                this.question_result = '回答正确！'
            } else {
                this.question_result = '回答错误！正确答案是：' + this.question.correct
            }
            this.total++
            if (questions.length > 0) {
                this.next_question = '下一题'
            } else {
                this.next_question = null
                this.check_result = '查看成绩'
            }
        },
        checkResult: function () {
            this.question = null
            this.results = {
                "right_answers": this.right_answers,
                "total": this.total
            }
        },
        reset: function () {
            this.question = null
            this.answer = null
            this.question_result = null
            this.next_question = null
            this.check_result = null
            this.results = null
            this.right_answers = 0
            this.total = 0
            this.mode = null
            this.start_screen = true
        },
        shuffle: function (options) {
            for (let i = options.length - 1; i > 0; i--) {
                let randomIndex = Math.floor(Math.random() * i);

                let temp = options[i];
                options[i] = options[randomIndex];
                options[randomIndex] = temp;
            }
            return options
        }
    }
})