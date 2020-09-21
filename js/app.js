/**
 * @copyright 2020 alanzoe.com
 */
let element_symbols = [
    { "title": "H", "correct": "氢", "others": ["轻", "氦", "氧", "氮", "氯"] },
    { "title": "He", "correct": "氦", "others": ["氢", "氧", "氩", "汞", "氮"] },
    { "title": "C", "correct": "碳", "others": ["钙", "炭", "铜", "氮", "氧"] },
    { "title": "N", "correct": "氮", "others": ["钠", "氧", "氢", "氦", "氯"] },
    { "title": "O", "correct": "氧", "others": ["氢", "碳", "氮", "氦", "氯"] },
    { "title": "Na", "correct": "钠", "others": ["氮", "纳", "镁", "钙", "铜"] },
    { "title": "Mg", "correct": "镁", "others": ["锰", "汞", "铜", "铁", "钾"] },
    { "title": "Al", "correct": "铝", "others": ["银", "氯", "钡", "锌", "锰"] },
    { "title": "Si", "correct": "硅", "others": ["硫", "磷", "碳", "氯", "铜"] },
    { "title": "P", "correct": "磷", "others": ["硫", "碳", "钾", "氮", "氧"] },
    { "title": "S", "correct": "硫", "others": ["硅", "碳", "氧", "磷", "氮"] },
    { "title": "Cl", "correct": "氯", "others": ["铝", "绿", "铜", "钙", "碳"] },
    { "title": "K", "correct": "钾", "others": ["钠", "钙", "氮", "氧", "磷"] },
    { "title": "Ca", "correct": "钙", "others": ["铜", "碳", "钾", "钡", "铁"] },
    { "title": "Fe", "correct": "铁", "others": ["铜", "镁", "铝", "锌", "银"] },
    { "title": "Cu", "correct": "铜", "others": ["铝", "氯", "碳", "钙", "锌"] },
    { "title": "Ag", "correct": "银", "others": ["汞", "镁", "铝", "铁", "钠"] },
    { "title": "Hg", "correct": "汞", "others": ["银", "氦", "氢", "镁", "铜"] },
    { "title": "Mn", "correct": "锰", "others": ["镁", "猛", "铁", "锌", "银"] },
    { "title": "Zn", "correct": "锌", "others": ["锰", "辛", "钠", "镁", "铝"] },
    { "title": "Ba", "correct": "钡", "others": ["钙", "钯", "汞", "铁", "铜"] },
]

let element_names = [
    { "title": "氢", "correct": "H", "others": ["Hg", "He", "C", "N", "O"] },
    { "title": "氦", "correct": "He", "others": ["he", "HE", "Hi", "H", "Ha"] },
    { "title": "碳", "correct": "C", "others": ["T", "N", "P", "c", "K"] },
    { "title": "氮", "correct": "N", "others": ["D", "n", "Ne", "Na", "O"] },
    { "title": "氧", "correct": "O", "others": ["o", "N", "H", "S", "C"] },
    { "title": "钠", "correct": "Na", "others": ["na", "NA", "Ne", "N", "Mg"] },
    { "title": "镁", "correct": "Mg", "others": ["Me", "Fe", "Hg", "Na", "Ag"] },
    { "title": "铝", "correct": "Al", "others": ["Cl", "AL", "Lv", "Ai", "CL"] },
    { "title": "硅", "correct": "Si", "others": ["Gi", "P", "S", "SI", "N"] },
    { "title": "磷", "correct": "P", "others": ["N", "S", "Si", "C", "O"] },
    { "title": "硫", "correct": "S", "others": ["P", "Si", "s", "O", "N"] },
    { "title": "氯", "correct": "Cl", "others": ["Lv", "Al", "CL", "Ca", "Cu"] },
    { "title": "钾", "correct": "K", "others": ["Ca", "Fe", "Mg", "Zn", "k"] },
    { "title": "钙", "correct": "Ca", "others": ["Zn", "Ga", "Fe", "K", "Na"] },
    { "title": "铁", "correct": "Fe", "others": ["Mg", "Cu", "Hg", "Ag", "Ba"] },
    { "title": "铜", "correct": "Cu", "others": ["Ca", "Cl", "Au", "CU", "Ca"] },
    { "title": "银", "correct": "Ag", "others": ["Hg", "Au", "Al", "Fe", "Zn"] },
    { "title": "汞", "correct": "Hg", "others": ["He", "Ag", "Cu", "Al", "Mg"] },
    { "title": "锰", "correct": "Mn", "others": ["Mg", "Me", "Hg", "Ag", "Cu"] },
    { "title": "锌", "correct": "Zn", "others": ["Fe", "Cu", "Mg", "Al", "Hg"] },
    { "title": "钡", "correct": "Ba", "others": ["Be", "Ｂ", "Ca", "Zn", "Cu"] }
]

let valences = [
    { "title": "K", "correct": "+1", "others": ["+2", "+3", "-1", "-2"] },
    { "title": "Na", "correct": "+1", "others": ["+2", "+3", "-1", "-2"] },
    { "title": "Ag", "correct": "+1", "others": ["+2", "+3", "-1", "-2"] },
    { "title": "H", "correct": "+1", "others": ["+2", "+3", "-1", "-2"] },
    { "title": "Ca", "correct": "+2", "others": ["+1", "+3", "-1", "-2"] },
    { "title": "Mg", "correct": "+2", "others": ["+1", "+3", "-1", "-2"] },
    { "title": "Cu", "correct": "+2", "others": ["+1", "+3", "-1", "-2"] },
    { "title": "Ba", "correct": "+2", "others": ["+1", "+3", "-1", "-2"] },
    { "title": "Zn", "correct": "+2", "others": ["+1", "+3", "-1", "-2"] },
    { "title": "Fe（铁）", "correct": "+3", "others": ["+1", "+2", "-1", "-2"] },
    { "title": "Fe（亚铁）", "correct": "+2", "others": ["+1", "+3", "-1", "-2"] },
    { "title": "Al", "correct": "+3", "others": ["+1", "+2", "-1", "-2"] },
    { "title": "O", "correct": "-2", "others": ["+2", "+3", "-1", "+1"] },
    { "title": "S", "correct": "-2", "others": ["+2", "+3", "-1", "+1"] },
    { "title": "Cl", "correct": "-1", "others": ["+2", "+3", "-2", "+1"] },
]

let oxides = [
    { "title": "氧化钙", "correct": "CaO", "others": ["Ca₂O", "CaO₂", "Ca₂O₂"] },
    { "title": "氧化钠", "correct": "Na₂O", "others": ["NaO", "NaO₂", "Na₂O₂"] },
    { "title": "氧化镁", "correct": "MgO", "others": ["MgO₂", "Mg₂O", "Mg₂O₂"] },
    { "title": "氧化锌", "correct": "ZnO", "others": ["Zn₂O", "ZnO₂", "Zn₂O₂"] },
    { "title": "水", "correct": "H₂O", "others": ["HO₂", "H₂O₂", "O₂H"] },
    { "title": "氧化钡", "correct": "BaO", "others": ["OBa", "Ba₂O", "BaO₂"] },
    { "title": "二氧化碳", "correct": "CO₂", "others": ["C₂O", "OC₂", "O₂C"] },
    { "title": "一氧化碳", "correct": "CO", "others": ["OC", "NO", "PO"] },
    { "title": "二氧化硫", "correct": "SO₂", "others": ["O₂S", "S₂O", "SiO₂"] },
    { "title": "二氧化氮", "correct": "NO₂", "others": ["N₂O", "₂ON", "O₂N"] },
    { "title": "四氧化二氮", "correct": "N₂O₄", "others": ["N₄O₂", "₂N₄O", "₄N₂O"] },
    { "title": "五氧化二磷", "correct": "P₂O₅", "others": ["O₅P₂", "P₅O₂", "₅O₂P"] },
    { "title": "氧化钾", "correct": "K₂O", "others": ["KO", "KO₂", "OK"] },
    { "title": "氧化铜", "correct": "CuO", "others": ["OCu", "Cu₂O", "CuO₂"] },
    { "title": "氧化铁", "correct": "Fe₂O₃", "others": ["FeO", "Fe₃O₄", "Fe₃O₂"] },
    { "title": "氧化亚铁", "correct": "FeO", "others": ["Fe₂O₃", "Fe₃O₄", "OFe"] },
    { "title": "四氧化三铁", "correct": "Fe₃O₄", "others": ["Fe₂O₃", "FeO", "Fe₄O₃"] },
    { "title": "氧化铝", "correct": "Al₂O₃", "others": ["AlO", "AlO₂", "Al₂O"] },
    { "title": "二氧化硅", "correct": "SiO₂", "others": ["SO₂", "O₂Si", "₂OSi"] },
]

let questions = []
let questions_data = null
let question_index = null

var app = new Vue({
    el: '#app',
    data: {
        start_screen: true,
        start_screen_data: {
            text: "化学小测试",
            description: "选择题库",
            btns: [
                { title: "元素符号 > 元素名称", mode: "symbol" },
                { title: "元素名称 > 元素符号", mode: "name" },
                { title: "根据元素符号选择化合价", mode: "valence" },
                { title: "常见氧化物化学式", mode: "oxide" },
            ]
        },
        question: null,
        answer: null,
        question_result: null,
        next_question: null,
        check_result: null,
        results: null,
        right_answers: 0,
        total: 0,
        start_time: null,
        btn_reset: "重新开始",
        mode: null
    },
    methods: {
        startQuiz: function (mode) {
            this.mode = mode
            this.start_time = Date.now()
            this.start_screen = false
            switch (this.mode) {
                case 'symbol':
                    questions_data = element_symbols
                    break;
                case 'valence':
                    questions_data = valences
                    break;
                case 'oxide':
                    questions_data = oxides
                    break;
                case 'name':
                default:
                    questions_data = element_names
                    break;
            }
            let question_list = Object.keys(questions_data)
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
            _question = questions_data[question_index]
            this.question.title = _question.title
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
            let title = ""
            for (let i in this.start_screen_data.btns) {
                let btn = this.start_screen_data.btns[i]
                if (btn.mode == this.mode) {
                    title = btn.title
                    break;
                }
            }
            this.results = {
                "title": title,
                "right_answers": this.right_answers,
                "total": this.total,
                "time": Math.floor((Date.now() - this.start_time) / 1000)
            }
        },
        reset: function () {
            this.mode = null
            this.question = null
            this.answer = null
            this.question_result = null
            this.next_question = null
            this.check_result = null
            this.results = null
            this.right_answers = 0
            this.total = 0
            this.start_screen = true
            this.start_time = null
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