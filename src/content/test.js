const a = [
  {
    id: "2",
    message: "开始会话后，这里就会显示第一句话，如果太长",
    status: 0,
    question: "1+1=?",
    tools: [
      {
        args: {
          text: "```python\ndef solution():\n    answer = cucl()\n    return answer\n```",
        },
        errmsg: "NameError(\"name 'cucl' is not defined\")",
        result: null,
        state: -10002,
        thought:
          "这段代码定义了一个名为 cucl 的函数，它返回 1 + 1 的结果，即 2。",
        type: "PythonExecutor",
        url: "http://python-executor-service.cloud-dev:8210/inference",
        valid: 0,
      },
      {
        args: {
          text: "```python\ndef solution():\n    def cucl():\n        return 1 + 1\n    answer = cucl()\n    return answer\n```",
        },
        errmsg: "",
        result: {
          text: "2",
        },
        state: 0,
        thought:
          "这段代码定义了一个名为 cucl 的函数，它返回 1 + 1 的结果，即 2。",
        type: "PythonExecutor",
        url: "http://python-executor-service.cloud-dev:8210/inference",
        valid: 0,
      },
    ],
  },
  {
    id: "3",
    message: "开始会话后，这里就会显示第一句话，如果太长",
    status: 0,
    question: "搜索复旦大学天气",
    tools: [
      {
        args: {
          text: "复旦大学天气",
        },
        errmsg: "",
        result: {
          origin: [
            {
              note: "directly return answerBox, thx google !",
              origin: {
                answer: "85°F",
                title:
                  "Fudan University, 220 Handan Road, Yangpu District, Shanghai, China / Weather",
              },
              summ: "85°F",
              title:
                "Fudan University, 220 Handan Road, Yangpu District, Shanghai, China / Weather",
              type: "answerBox",
              url: "http://www.zgjia.com/jingdian/yangpu_fudandaxue/15tian.html",
            },
          ],
          text: "0.85°F",
        },
        state: 0,
        thought: "我需要使用搜索API来获取复旦大学和天气的信息。",
        type: "Search",
        url: "http://moss-websearch.cloud:7004/inference",
        valid: 0,
      },
      {
        args: {
          text: "复旦大学",
        },
        errmsg: "",
        result: {
          origin: [
            {
              note: "use description as summ",
              summ: "复旦大学（Fudan University），简称“复旦”，位于中国上海，由中华人民共和国教育部直属，中央直管副部级建制，国家双一流（A类）、985工程、211工程建设高校，入选珠峰计划、111计划、2011计划、卓越医生教育培养计划、卓越法律人才教育培养计划、国家建设高水平大学公派研究生项目，九校联盟（C9）、中国大学校长联谊会、东亚研究型大学协会、环太平洋大学协会的重要成员，是一所世界知名、国内顶尖的全国重点大学。",
              title: "复旦大学Fudan University",
              type: "description",
              url: "https://www.fudan.edu.cn/",
            },
            {
              note: "fail to get ... use snippet",
              summ: "复旦大学（英语：Fudan University），简称复旦，旧称复旦公学、国立复旦大学，始创于1905年，位于中国上海，是一所综合性研究型大学。复旦大学校名取自《尚书大传》 ...",
              title: "复旦大学- 维基百科，自由的百科全书",
              type: "snippet",
              url: "https://zh.wikipedia.org/zh-hans/复旦大学",
            },
            {
              note: "fail to get ... use snippet",
              summ: "復旦大學（英語：Fudan University），簡稱復旦，舊稱復旦公學、國立復旦大學，始創於1905年，位於中國上海，是一所綜合性研究型大學。復旦大學校名取自《尚書大傳》 ...",
              title: "復旦大學- 維基百科，自由的百科全書",
              type: "snippet",
              url: "https://zh.wikipedia.org/wiki/复旦大学",
            },
          ],
          text: "0.复旦大学（Fudan University），简称“复旦”，位于中国上海，由中华人民共和国教育部直属，中央直管副部级建制，国家双一流（A类）、985工程、211工程建设高校，入选珠峰计划、111计划、2011计划、卓越医生教育培养计划、卓越法律人才教育培养计划、国家建设高水平大学公派研究生项目，九校联盟（C9）、中国大学校长联谊会、东亚研究型大学协会、环太平洋大学协会的重要成员，是一所世界知名、国内顶尖的全国重点大学。1.复旦大学（英语：Fudan University），简称复旦，旧称复旦公学、国立复旦大学，始创于1905年，位于中国上海，是一所综合性研究型大学。复旦大学校名取自《尚书大传》 ...2.復旦大學（英語：Fudan University），簡稱復旦，舊稱復旦公學、國立復旦大學，始創於1905年，位於中國上海，是一所綜合性研究型大學。復旦大學校名取自《尚書大傳》 ...",
        },
        state: 0,
        thought: "这个结果似乎不是我们想要的，我们需要重新搜索一下。",
        type: "Search",
        url: "http://moss-websearch.cloud:7004/inference",
        valid: 0,
      },
      {
        args: {
          text: "复旦大学",
        },
        errmsg: "",
        result: {
          origin: [
            {
              note: "use description as summ",
              summ: "复旦大学（Fudan University），简称“复旦”，位于中国上海，由中华人民共和国教育部直属，中央直管副部级建制，国家双一流（A类）、985工程、211工程建设高校，入选珠峰计划、111计划、2011计划、卓越医生教育培养计划、卓越法律人才教育培养计划、国家建设高水平大学公派研究生项目，九校联盟（C9）、中国大学校长联谊会、东亚研究型大学协会、环太平洋大学协会的重要成员，是一所世界知名、国内顶尖的全国重点大学。",
              title: "复旦大学Fudan University",
              type: "description",
              url: "https://www.fudan.edu.cn/",
            },
            {
              note: "fail to get ... use snippet",
              summ: "复旦大学（英语：Fudan University），简称复旦，旧称复旦公学、国立复旦大学，始创于1905年，位于中国上海，是一所综合性研究型大学。复旦大学校名取自《尚书大传》 ...",
              title: "复旦大学- 维基百科，自由的百科全书",
              type: "snippet",
              url: "https://zh.wikipedia.org/zh-hans/复旦大学",
            },
            {
              note: "good summ and use it",
              summ: "复旦大学在线教育中心。复旦大学在线教育中心。复旦大学在线教育中心。",
              title: "复旦大学在线教育中心",
              type: "my_summ",
              url: "http://fudan.mooc.chaoxing.com/",
            },
          ],
          text: "0.复旦大学（Fudan University），简称“复旦”，位于中国上海，由中华人民共和国教育部直属，中央直管副部级建制，国家双一流（A类）、985工程、211工程建设高校，入选珠峰计划、111计划、2011计划、卓越医生教育培养计划、卓越法律人才教育培养计划、国家建设高水平大学公派研究生项目，九校联盟（C9）、中国大学校长联谊会、东亚研究型大学协会、环太平洋大学协会的重要成员，是一所世界知名、国内顶尖的全国重点大学。1.复旦大学（英语：Fudan University），简称复旦，旧称复旦公学、国立复旦大学，始创于1905年，位于中国上海，是一所综合性研究型大学。复旦大学校名取自《尚书大传》 ...2.复旦大学在线教育中心。复旦大学在线教育中心。复旦大学在线教育中心。",
        },
        state: 0,
        thought: "我需要使用搜索API来获取复旦大学和天气的信息。",
        type: "Search",
        url: "http://moss-websearch.cloud:7004/inference",
        valid: 0,
      },
    ],
  },
];
