import React, { useRef, useState } from "react";
import OrganizationChart from "../components/ChartContainer";
import "./export-chart.css";

const PanZoomChart = () => {
  const orgchart = useRef();
  // const ds = {
  //   id: "n1",
  //   name: "陳榮煉Levo",
  //   title: "主席兼執行董事",
  //   colorId:"red",
  //   children: [
  //     { id: "n2", name: "曾家雄KH", title: "執行董事",children:[
  //       {id:"n12",name:"勇大安Eric",title:"财务副总裁",children:[
  //         {id:"n15",name:"财务部"},
  //         {id:"n16",name:"规章部"},
  //         {id:"n17",name:"内务部"}
  //       ]},
  //       {id:"n13",name:"企业策划部"},
  //       {id:"n14",name:"财务策划部"}
  //     ] },
  //     {
  //       id: "n3",
  //       name: "王珮Cherie",
  //       title: "集團高級副總",
  //       children: [
  //         { id: "n4", name: "账房部" },
  //         {id: "n5",name: "账房业务部"},
  //         { id: "n8", name: "中央账房部"},
  //         {id:"n18",name:"海外事业部"},
  //         {id:"n19",name:"信贷管理部"},
  //         {id:"n20",name:"法律业务部"}
  //       ]
  //     },
  //     {id:"n21",name:"总裁办公室"},
  //     {id:"n22",name:"业务扩展部"},
  //     {id:"n23",name:"市场发展部"},
  //     { id: "n9", name: "运营总裁", title: "李彦霖Vincent",children:[
  //       {},
  //       {},
  //       {},
  //       {},
  //       {},
  //       {},
  //       {},
  //       {},
  //       {}
  //     ] }
     
  //   ]
  // };
  const ds= {
    "id": "n1",
    "name": "德晋集团",
    "title": "",
    "colorId":"rgb(214, 149, 43)",
    "children": [
    {
      "id": "1001A1100000000003W8",
      "name": "人力資源部",
      "totalnumber": 29,
      "children": null,
      "colorId":"rgb(240, 197, 128)",
      "title": 29
    },
    {
      "id": "1001A110000000004DF9",
      "name": "中央客戶服務部",
      "totalnumber": 1,
      "children": null,
      "colorId":"rgb(240, 197, 128)",
      "title":1
    },
    {
      "id": "1001A1100000000003VS",
      "name": "中央監察部",
      "totalnumber": 7,
      "children": null,
      "colorId":"rgb(240, 197, 128)",
      "title": 7
    },
    {
      "id": "1001A110000000004DHR",
      "name": "德晉集團",
      "totalnumber": 1,
      "children": null,
      "colorId":"rgb(240, 197, 128)",
      "title":1
    },
    {
      "id": "1001A110000000002225",
      "name": "市場發展部",
      "totalnumber": 5,
      "colorId":"rgb(240, 197, 128)",
      "title":5,
      "children": [
        {
          "id": "1001A11000000000221Z",
          "name": "客戶關係發展部",
          "totalnumber": 21,
          "children": null,
          "colorId":"rgb(198, 233, 104)",
          "title": 21
        },
        {
          "id": "1001A11000000000221X",
          "name": "尊御服務部",
          "totalnumber": 8,
          "children": null,
          "colorId":"rgb(198, 233, 104)",
          "title": 8
        },
        {
          "id": "1001A110000000002223",
          "name": "策略分析部",
          "totalnumber": 2,
          "children": null,
          "colorId":"rgb(198, 233, 104)",
          "title": 2
        }
      ],
      "title": null
    },
    {
      "id": "1001A11000000000221V",
      "name": "韓國",
      "totalnumber": null,
      "colorId":"rgb(240, 197, 128)",
      "children": [
        {
          "id": "1001A11000000000221T",
          "name": "韓國海外市場部",
          "totalnumber": 1,
          "children": null,
          "colorId":"rgb(198, 233, 104)",
          "title": 1
        }
      ],
      "title": null
    },
    {
      "id": "1001A11000000000221P",
      "name": "禮賓部",
      "totalnumber": 49,
      "colorId":"rgb(240, 197, 128)",
      "title":49,
      "children": [
        {
          "id": "1001A11000000000221N",
          "name": "車務部",
          "totalnumber": 40,
          "children": null,
          "colorId":"rgb(198, 233, 104)",
          "title": 40
        }
      ],
      "title": null
    },
    {
      "id": "1001A11000000000221L",
      "name": "海外市場部",
      "totalnumber": 14,
      "children": null,
      "colorId":"rgb(240, 197, 128)",
      "title": 14
    },
    {
      "id": "1001A110000000001L4J",
      "name": "財務部",
      "totalnumber": 4,
      "colorId":"rgb(240, 197, 128)",
      "title":4,
      "children": [
        {
          "id": "1001A11000000000221D",
          "name": "會計組",
          "totalnumber": 10,
          "children": null,
          "colorId":"rgb(198, 233, 104)",
          "title": 10
        },
        {
          "id": "1001A11000000000221F",
          "name": "財務組",
          "totalnumber": 10,
          "children": null,
          "colorId":"rgb(198, 233, 104)",
          "title": 10
        }
      ],
      "title": null
    },
    {
      "id": "1001A110000000004DF5",
      "name": "市場推廣部",
      "totalnumber": 1,
      "children": null,
      "colorId":"rgb(240, 197, 128)",
      "title":1
    },
    {
      "id": "1001A110000000001L4S",
      "name": "資訊科技部",
      "totalnumber": 20,
      "children": null,
      "colorId":"rgb(240, 197, 128)",
      "title": 20
    },
    {
      "id": "1001A11000000000221H",
      "name": "內審部",
      "totalnumber": 1,
      "children": null,
      "colorId":"rgb(240, 197, 128)",
      "title": 1
    },
    {
      "id": "1001A11000000000221J",
      "name": "規章部",
      "totalnumber": 8,
      "children": null,
      "colorId":"rgb(240, 197, 128)",
      "title": 8
    },
    {
      "id": "1001A1100000000003W1",
      "name": "行政總裁辦公室",
      "totalnumber": 1,
      "children": null,
      "colorId":"rgb(240, 197, 128)",
      "title": 1
    },
    {
      "id": "1001A110000000008XEX",
      "name": "部門",
      "totalnumber": null,
      "colorId":"rgb(240, 197, 128)",
      "children": [
        {
          "id": "1001A110000000008XF4",
          "name": "分部",
          "totalnumber": 18,
          "colorId":"rgb(198, 233, 104)",
          "children": [
            {
              "id": "1001A110000000008XFJ",
              "name": "分組",
              "totalnumber": 31,
              "children": null,
              "colorId":"rgb(104, 207, 233)",
              "title": 31
            }
          ],
          "title": null
        },
        {
          "id": "1001A11000000000HKOS",
          "name": "分部2",
          "totalnumber": 9,
          "children": null,
          "colorId":"rgb(198, 233, 104)",
          "title": 9
        },
        {
          "id": "1001A11000000000I2VD",
          "name": "TEST0001",
          "totalnumber": 1,
          "children": null,
          "colorId":"rgb(198, 233, 104)",
          "title": 1
        },
        {
          "id": "1001A11000000000JBCY",
          "name": "分部3",
          "totalnumber": 4,
          "children": null,
          "colorId":"rgb(198, 233, 104)",
          "title": 4
        }
      ],
      "title": null
    },
    {
      "id": "1001A1100000000027KN",
      "name": "海外區域營運",
      "totalnumber": null,
      "colorId":"rgb(240, 197, 128)",
      "children": [
        {
          "id": "1001A1100000000027KF",
          "name": "菲律賓(馬尼拉)",
          "totalnumber": null,
          "colorId":"rgb(198, 233, 104)",
          "children": [
            {
              "id": "1001A1100000000027JV",
              "name": "賬房部（菲律賓）",
              "totalnumber": null,
              "colorId":"rgb(104, 207, 233)",
              "children": [
                {
                  "id": "1001A1100000000027JT",
                  "name": "晨麗賬房部（菲律賓）",
                  "totalnumber": 15,
                  "children": null,
                  "colorId":"rgb(214, 104, 233)",
                  "title":15
                },
                {
                  "id": "1001A1100000000027JR",
                  "name": "岡田賬房部（菲律賓）",
                  "totalnumber": 6,
                  "children": null,
                  "colorId":"rgb(214, 104, 233)",
                  "title": 6
                }
              ],
              "title": null
            },
            {
              "id": "1001A1100000000027K1",
              "name": "貴賓服務部（菲律賓）",
              "totalnumber": 1,
              "colorId":"rgb(104, 207, 233)",
              "children": [
                {
                  "id": "1001A1100000000027JX",
                  "name": "晨麗貴賓服務部（菲律賓）",
                  "totalnumber": 37,
                  "children": null,
                  "colorId":"rgb(214, 104, 233)",
                  "title": 37
                },
                {
                  "id": "1001A1100000000027JZ",
                  "name": "岡田貴賓服務部（菲律賓）",
                  "totalnumber": 34,
                  "children": null,
                  "colorId":"rgb(214, 104, 233)",
                  "title": 34
                }
              ],
              "title": null
            },
            {
              "id": "1001A1100000000027K5",
              "name": "中央禮賓部（菲律賓）",
              "totalnumber": 17,
              "children": null,
              "colorId":"rgb(104, 207, 233)",
              "title": 17
            },
            {
              "id": "1001A1100000000027K7",
              "name": "人力資源及行政部（菲律賓）",
              "totalnumber": 7,
              "children": null,
              "colorId":"rgb(104, 207, 233)",
              "title": 7
            },
            {
              "id": "1001A1100000000027K9",
              "name": "資訊科技部（菲律賓）",
              "totalnumber": 2,
              "children": null,
              "colorId":"rgb(104, 207, 233)",
              "title": 2
            }
          ],
          "title": null
        },
        {
          "id": "1001A1100000000027KL",
          "name": "越南",
          "totalnumber": null,
          "colorId":"rgb(198, 233, 104)",
          "children": [
            {
              "id": "1001A1100000000027KH",
              "name": "貴賓服務部（越南）",
              "totalnumber": 23,
              "children": null,
              "colorId":"rgb(104, 207, 233)",
              "title":23
            },
            {
              "id": "1001A1100000000027KJ",
              "name": "賬房部（越南）",
              "totalnumber": 10,
              "children": null,
              "colorId":"rgb(104, 207, 233)",
              "title": 10
            }
          ],
          "title": null
        }
      ],
      "title": null
    },
    {
      "id": "1001A1100000000027KP",
      "name": "信貸管理部",
      "totalnumber": 2,
      "children": null,
      "colorId":"rgb(240, 197, 128)",
      "title":2
    },
    {
      "id": "1001A1100000000027KR",
      "name": "法律事務部",
      "totalnumber": 9,
      "children": null,
      "colorId":"rgb(240, 197, 128)",
      "title": 9
    },
    {
      "id": "1001A1100000000027KT",
      "name": "會籍推廣部",
      "totalnumber": 2,
      "children": null,
      "colorId":"rgb(240, 197, 128)",
      "title": 2
    },
    {
      "id": "1001A110000000004DI1",
      "name": "新葡京貴賓會",
      "totalnumber": 1,
      "children": null,
      "colorId":"rgb(240, 197, 128)",
      "title": 1
    },
    {
      "id": "1001A1100000000027JN",
      "name": "賬房業務管理部",
      "totalnumber": 25,
      "colorId":"rgb(240, 197, 128)",
      "title":25,
      "children": [
        {
          "id": "1001A1100000000027JJ",
          "name": "賬房部",
          "totalnumber": null,
          "colorId":"rgb(198, 233, 104)",
          "children": [
            {
              "id": "1001A1100000000027IF",
              "name": "星際賬房部",
              "totalnumber": 16,
              "children": null,
              "colorId":"rgb(104, 207, 233)",
              "title": 16
            },
            {
              "id": "1001A1100000000027JH",
              "name": "美獅美高梅賬房部",
              "totalnumber": 15,
              "children": null,
              "colorId":"rgb(104, 207, 233)",
              "title": 15
            },
            {
              "id": "1001A1100000000027IX",
              "name": "四季賬房部",
              "totalnumber": 15,
              "children": null,
              "colorId":"rgb(104, 207, 233)",
              "title": 15
            },
            {
              "id": "1001A1100000000027J1",
              "name": "凱旋門賬房部",
              "totalnumber": 14,
              "children": null,
              "colorId":"rgb(104, 207, 233)",
              "title": 14
            },
            {
              "id": "1001A1100000000027J7",
              "name": "銀河二期賬房部",
              "totalnumber": 13,
              "children": null,
              "colorId":"rgb(104, 207, 233)",
              "title": 13
            },
            {
              "id": "1001A1100000000027JB",
              "name": "永利皇宮賬房部",
              "totalnumber": 12,
              "children": null,
              "colorId":"rgb(104, 207, 233)",
              "title": 12
            },
            {
              "id": "1001A1100000000027IJ",
              "name": "威尼斯人賬房部",
              "totalnumber": 13,
              "children": null,
              "colorId":"rgb(104, 207, 233)",
              "title": 13
            },
            {
              "id": "1001A1100000000027IL",
              "name": "新濠天地賬房部",
              "totalnumber": 16,
              "children": null,
              "colorId":"rgb(104, 207, 233)",
              "title": 16
            },
            {
              "id": "1001A1100000000027IN",
              "name": "永利賬房部",
              "totalnumber": 16,
              "children": null,
              "colorId":"rgb(104, 207, 233)",
              "title": 16
            },
            {
              "id": "1001A1100000000027IP",
              "name": "新葡京賬房部",
              "totalnumber": 13,
              "children": null,
              "colorId":"rgb(104, 207, 233)",
              "title": 13
            },
            {
              "id": "1001A1100000000027IR",
              "name": "美高梅賬房部",
              "totalnumber": 14,
              "children": null,
              "colorId":"rgb(104, 207, 233)",
              "title": 14
            },
            {
              "id": "1001A1100000000027IT",
              "name": "銀河一期賬房部",
              "totalnumber": 14,
              "children": null,
              "colorId":"rgb(104, 207, 233)",
              "title": 14
            }
          ],
          "title": null
        },
        {
          "id": "1001A1100000000027JL",
          "name": "中央賬房部",
          "totalnumber": 15,
          "children": null,
          "colorId":"rgb(198, 233, 104)",
          "title": 15
        }
      ],
      "title": null
    },
    {
      "id": "1001A1100000000027I7",
      "name": "貴賓服務部",
      "totalnumber": null,
      "colorId":"rgb(240, 197, 128)",
      "children": [
        {
          "id": "1001A1100000000027H5",
          "name": "星際貴賓服務部",
          "totalnumber": 61,
          "children": null,
          "colorId":"rgb(198, 233, 104)",
          "title": 61
        },
        {
          "id": "1001A1100000000027HL",
          "name": "銀河一期貴賓服務部",
          "totalnumber": 52,
          "children": null,
          "colorId":"rgb(198, 233, 104)",
          "title": 52
        },
        {
          "id": "1001A1100000000027H9",
          "name": "威尼斯人貴賓服務部",
          "totalnumber": 38,
          "children": null,
          "colorId":"rgb(198, 233, 104)",
          "title": 38
        },
        {
          "id": "1001A1100000000027HB",
          "name": "新濠天地貴賓服務部",
          "totalnumber": 54,
          "children": null,
          "colorId":"rgb(198, 233, 104)",
          "title": 54
        },
        {
          "id": "1001A1100000000027HD",
          "name": "永利貴賓服務部",
          "totalnumber": 45,
          "children": null,
          "colorId":"rgb(198, 233, 104)",
          "title": 45
        },
        {
          "id": "1001A1100000000027HF",
          "name": "新葡京貴賓服務部",
          "totalnumber": 15,
          "children": null,
          "colorId":"rgb(198, 233, 104)",
          "title": 15
        },
        {
          "id": "1001A1100000000027HH",
          "name": "美高梅貴賓服務部",
          "totalnumber": 40,
          "children": null,
          "colorId":"rgb(198, 233, 104)",
          "title":40
        },
        {
          "id": "1001A1100000000027I1",
          "name": "巴黎人貴賓服務部",
          "totalnumber": 2,
          "children": null,
          "colorId":"rgb(198, 233, 104)",
          "title": 2
        },
        {
          "id": "1001A1100000000027I3",
          "name": "美獅美高梅貴賓服務部",
          "totalnumber": 48,
          "children": null,
          "colorId":"rgb(198, 233, 104)",
          "title": 48
        },
        {
          "id": "1001A1100000000027HN",
          "name": "四季貴賓服務部",
          "totalnumber": 42,
          "children": null,
          "colorId":"rgb(198, 233, 104)",
          "title": 42
        },
        {
          "id": "1001A1100000000027HP",
          "name": "金沙城中心貴賓服務部",
          "totalnumber": 1,
          "children": null,
          "colorId":"rgb(198, 233, 104)",
          "title": 1
        },
        {
          "id": "1001A1100000000027HR",
          "name": "凱旋門貴賓服務部",
          "totalnumber": 43,
          "children": null,
          "colorId":"rgb(198, 233, 104)",
          "title": 43
        },
        {
          "id": "1001A1100000000027HT",
          "name": "新濠鋒貴賓服務部",
          "totalnumber": 5,
          "children": null,
          "colorId":"rgb(198, 233, 104)",
          "title": 5
        },
        {
          "id": "1001A1100000000027HV",
          "name": "銀河二期貴賓服務部",
          "totalnumber": 47,
          "children": null,
          "colorId":"rgb(198, 233, 104)",
          "title": 47
        },
        {
          "id": "1001A1100000000027HX",
          "name": "永利皇宮貴賓服務部",
          "totalnumber": 53,
          "children": null,
          "colorId":"rgb(198, 233, 104)",
          "title": 53
        },
        {
          "id": "1001A1100000000027I5",
          "name": "中央貴賓部",
          "totalnumber": 6,
          "children": null,
          "colorId":"rgb(198, 233, 104)",
          "title": 6
        }
      ],
      "title": null
    },
    {
      "id": "1001A1100000000027I9",
      "name": "品牌及市場推廣部",
      "totalnumber": 8,
      "children": null,
      "colorId":"rgb(240, 197, 128)",
      "title": 8
    },
    {
      "id": "1001A1100000000027IB",
      "name": "企業策略部",
      "totalnumber": 4,
      "children": null,
      "colorId":"rgb(240, 197, 128)",
      "title": 4
    },
    {
      "id": "1001A1100000000027ID",
      "name": "財務策劃部",
      "totalnumber": 2,
      "children": null,
      "colorId":"rgb(240, 197, 128)",
      "title": 2
    },
    {
      "id": "1001A11000000000222N",
      "name": "市場發展部（海外區域）",
      "totalnumber": 2,
      "colorId":"rgb(240, 197, 128)",
      "title":2,
      "children": [
        {
          "id": "1001A11000000000222F",
          "name": "客戶關係發展部（菲律賓）",
          "totalnumber": 1,
          "children": null,
          "colorId":"rgb(198, 233, 104)",
          "title": 1
        },
        {
          "id": "1001A11000000000222H",
          "name": "尊御服務部（菲律賓）",
          "totalnumber": 4,
          "children": null,
          "colorId":"rgb(198, 233, 104)",
          "title": 4
        },
        {
          "id": "1001A11000000000222J",
          "name": "客戶關係發展部（越南）",
          "totalnumber": 4,
          "children": null,
          "colorId":"rgb(198, 233, 104)",
          "title": 4
        }
      ],
      "title": null
    },
    {
      "id": "1001A110000000002229",
      "name": "行政及採購部",
      "totalnumber": 16,
      "children": null,
      "colorId":"rgb(240, 197, 128)",
      "title": 16
    },
    {
      "id": "1001A11000000000222B",
      "name": "集團培訓發展部",
      "totalnumber": 9,
      "children": null,
      "colorId":"rgb(240, 197, 128)",
      "title": 9
    },
    {
      "id": "1001A11000000000222D",
      "name": "總裁辦公室",
      "totalnumber": 14,
      "children": null,
      "colorId":"rgb(240, 197, 128)",
      "title": 14
    },
    {
      "id": "1001A110000000002227",
      "name": "業務拓展部",
      "totalnumber": 34,
      "children": null,
      "colorId":"rgb(240, 197, 128)",
      "title": 34
    }
    ]
  }

 const exportTo = () => {
  orgchart.current.exportTo(filename, fileextension);
  };

  const [filename, setFilename] = useState("organization_chart");
  const [fileextension, setFileextension] = useState("png");

  const onNameChange = event => {
    setFilename(event.target.value);
  };

  const onExtensionChange = event => {
    setFileextension(event.target.value);
  };

  return ( 
    <>
    <section className="toolbar">
    <label htmlFor="txt-filename">文件名:</label>
    <input
      id="txt-filename"
      type="text"
      value={filename}
      onChange={onNameChange}
      style={{ fontSize: "1rem", marginRight: "2rem" ,width:"15rem",height:"2rem"}}
    />
    <span>文件格式: </span>
    <input
      id="rd-png"
      type="radio"
      value="png"
      checked={fileextension === "png"}
      onChange={onExtensionChange}
    />
    <label htmlFor="rd-png">png</label>
    <input
      style={{ marginLeft: "1rem" }}
      id="rd-pdf"
      type="radio"
      value="pdf"
      checked={fileextension === "pdf"}
      onChange={onExtensionChange}
    />
    <label htmlFor="rd-pdf">pdf</label>
    <button
      onClick={exportTo}
      style={{ marginLeft: "2rem" }}
    >
      导出
    </button>
  </section>
  <OrganizationChart datasource={ds} pan={true} zoom={true} ref={orgchart}/>
  </>
  );
};

export default PanZoomChart;
