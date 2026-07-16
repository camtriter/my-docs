# Markdown

## 二级标题

### 三级标题


## 列表

- 苹果
- 香蕉
    - 大蕉
    - 小米蕉

[访问github](https://github.com/)

## 代码

```javascript
function greet（name）{
    console.log("你好，" + name);
}
greet("张三");

```
## 表格
| 姓名 | 年龄 |
| --- | --- |
| 张三 | 18 |
| 李四 | 20 |
| 王五 | 22 |


## 引用
> 这是一个引用
> 这是第二个引用


## 任务列表
- [x] 任务1
- [x] 任务2
- [ ] 任务3


```mermaid
graph TD
    A[开始] --> B[任务1]
    B --> C[任务2]
    C --> D[任务3]
    D --> E[完成]
```


<details>
    <summary>这是一个摘要</summary>
    这是一个详细的内容
</details>

---
* 这是一个列表项
* 这是第二个列表项
***

保存文件请按<kbd>Ctrl</kbd>+<kbd>S</kbd>
或<kbd>Cmd</kbd>+<kbd>S</kbd>
。


<div align="center">
## 居中

</div>

<span style="color: red;">这是一个红色的文本</span>

<span style="color: blue;">这是一个蓝色的文本</span>


## 脚注示例

Markdown 由 John Gruber 和 Aaron Swartz 共同创建[^1]。

[^1]: John Gruber 于 2004 年发布了 Markdown 的第一个版本，语法设计的初衷是"让文档既易于阅读也易于编写"。


```mermaid
graph TD
    A[开始写文档] --> B{内容准备好了吗}
    B -->|准备好了| C[gitbook build 构建]
    B -->|还没好| D[继续写 Markdown]
    D --> B
    C --> E[部署到服务器]
    E --> F[完成]
```
