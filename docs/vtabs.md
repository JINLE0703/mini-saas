# tabs

选项卡，可用于横向和纵向

横向选项卡使用内容区域子元素需指定 `slot=tab-item-index`，index 为选项卡下标（对应 tabs）

纵向选项卡需配合 `tabs-item` 使用

## API

| 属性       | 类型    | 默认  | 必填 | 说明                                                         |
| ---------- | ------- | ----- | ---- | :----------------------------------------------------------- |
| row        | Boolean | false | 是   | 设置为横向导航栏                                             |
| column     | Boolean | false | 是   | 设置为纵向导航栏                                             |
| tabs       | Array   | []    | 是   | 标签栏数据，每一项为一个对象，对象必须包含 title 属性，如 {title: 'title'} |
| active-tab | Number  | 0     | 否   | 当前激活的 tab 的下标，对应 tabs                             |
| animation  | Boolean | true  | 否   | 是否开启动画效果（column才有）                               |
| show-title | Boolean | false | 否   | 是否显示内容标题（column才有）                               |

## 样式

| 属性                    | 类型   | 默认     | 必填 | 说明                 |
| ----------------------- | ------ | -------- | ---- | -------------------- |
| tab-bar-class           | String |          | 否   | 导航栏样式           |
| active-class            | String |          | 否   | 激活 tab 项样式      |
| active-tab-bg-color     | String | \#ffffff | 否   | tab 项激活背景颜色   |
| inactive-tab-bg-color   | String | \#eeeeee | 否   | tab 项未激活背景颜色 |
| active-tab-text-color   | String | \#07C160 | 否   | tab 项激活文字颜色   |
| inactive-tab-text-color | String | \#000000 | 否   | tab 项未激活文字颜色 |
| tab-line-color          | String | \#07C160 | 否   | tab 项直线颜色       |
| title-class             | String |          | 否   | 内容标题样式         |

## 事件

| 属性         | 类型  | 默认 | 必填 | 说明                                              |
| ------------ | ----- | ---- | ---- | ------------------------------------------------- |
| bindtabclick | event |      | 否   | 点击 tab 时触发，e.detail={index}                 |
| bindchange   | event |      | 否   | 内容区域滚动导致 tab 变化时触发, e.detail={index} |

## tabs-item

纵向选项卡内容

| 属性      | 类型   | 默认 | 必填 | 说明               |
| --------- | ------ | ---- | ---- | ------------------ |
| tab-index | Number | 0    | 是   | 对应 tabs 数据索引 |

## 注意事项

1. 纵向选项卡外部父组件需给定指定高度