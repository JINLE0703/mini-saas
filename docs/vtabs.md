# vtabs

纵向选项卡，需与  `vtabs-item` 结合使用

## API

| 属性       | 类型    | 默认  | 必填 | 说明                                                         |
| ---------- | ------- | ----- | ---- | :----------------------------------------------------------- |
| vtabs      | Array   | []    | 是   | 标签栏数据，每一项为一个对象，对象必须包含 title 属性，如 {title: 'title'} |
| active-tab | Number  | 0     | 否   | 当前激活的 tab 的下标，对应 vtabs                            |
| animation  | Boolean | true  | 否   | 是否开启动画效果                                             |
| show-title | Boolean | false | 否   | 是否显示内容标题                                             |

## 样式

| 属性                    | 类型   | 默认     | 必填 | 说明                 |
| ----------------------- | ------ | -------- | ---- | -------------------- |
| tab-bar-class           | String |          | 否   | 导航栏样式           |
| active-class            | String |          | 否   | 激活 tab 项样式      |
| active-tab-bg-color     | String | \#ffffff | 否   | tab 项激活背景颜色   |
| inactive-tab-bg-color   | String | \#eeeeee | 否   | tab 项未激活背景颜色 |
| active-tab-text-color   | String | \#07C160 | 否   | tab 项激活文字颜色   |
| inactive-tab-text-color | String | \#000000 | 否   | tab 项未激活文字颜色 |
| tab-line-color          | String | \#07C160 | 否   | tab 项侧边直线颜色   |
| title-class             | String |          | 否   | 内容标题样式         |

## 事件

| 属性         | 类型  | 默认 | 必填 | 说明                                              |
| ------------ | ----- | ---- | ---- | ------------------------------------------------- |
| bindtabclick | event |      | 否   | 点击 tab 时触发，e.detail={index}                 |
| bindchange   | event |      | 否   | 内容区域滚动导致 tab 变化时触发, e.detail={index} |

# vtabs-item

纵向选项卡内容

| 属性      | 类型   | 默认 | 必填 | 说明               |
| --------- | ------ | ---- | ---- | ------------------ |
| tab-index | Number | 0    | 是   | 对应 tabs 数据索引 |

