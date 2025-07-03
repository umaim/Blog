---
title: Markdown 语法支持
author: CWorld
pubDatetime: 2025-05-14T10:00:00.000Z
slug: markdown
featured: true
draft: false
tags:
  - Markdown
description: "Markdown 是一种轻量级的「标记语言」。"
---

## 基本语法

Markdown 是一种轻量级且易于使用的语法，用于为您的写作设计风格。

### 标题

文章内容较多时，可以用标题分段：

```markdown
# 标题 1

## 标题 2

## 大标题

### 小标题
```

标题预览会打乱文章的结构，所以在此不展示。

### 粗斜体

```markdown
_斜体文本_

**粗体文本**

**_粗斜体文本_**
```

预览：

_斜体文本_

**粗体文本**

**_粗斜体文本_**

### 链接

```markdown
文字链接 [链接名称](http://链接网址)
```

预览：

文字链接 [链接名称](http://链接网址)

### 行内代码

```markdown
这是一条 `单行代码`
```

预览：

这是一条 `行内代码`

### 代码块

````markdown
```js
// calculate fibonacci
function fibonacci(n) {
  if (n <= 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
```
````

预览：

```js
// calculate fibonacci
function fibonacci(n) {
  if (n <= 1) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
```

<!-- [!code ++] -->

#### 代码行高亮语法 [!code <...>]

| 高亮语义 | 语法                  |
| -------- | --------------------- |
| 高亮本行 | `[!code highlight]`   |
| 高亮两行 | `[!code highlight:2]` |
| 新增本行 | `[!code ++]`          |
| 新增两行 | `[!code ++:2]`        |
| 删除本行 | `[!code --]`          |
| 删除3行  | `[!code --:3]`        |

预览：

```js
高亮本行; // [!code highlight]

// [!code highlight:2]
高亮两行;
高亮两行;

新增本行; // [!code ++]

// [!code ++:2]
新增两行;
新增两行;

删除本行; // [!code --]

// [!code --:3]
删除三行;
删除三行;
删除三行;
```

类 HTML 语言语法，使用 `<!--注释-->` 形式语法即可

当前使用 shiki 作为代码高亮插件，支持的语言请参考 [shiki / languages](https://shiki.matsu.io/languages.html)。

### 行内公式

```markdown
这是一条行内公式 $e^{i\pi} + 1 = 0$
```

预览：

这是一条行内公式 $e^{i\pi} + 1 = 0$

### 公式块

```markdown
$$
\hat{f}(\xi) = \int_{-\infty}^{\infty} f(x) e^{-2\pi i x \xi} \, dx
$$
```

预览：

$$
\hat{f}(\xi) = \int_{-\infty}^{\infty} f(x) e^{-2\pi i x \xi} \, dx
$$

当前使用 KaTeX 作为数学公式插件，支持的语法请参考 [KaTeX Supported Functions](https://katex.org/docs/supported.html)。

#### 图片

```markdown
![GitHub](https://avatars.githubusercontent.com/u/9919)
```

预览：

![GitHub](https://avatars.githubusercontent.com/u/9919)

#### 删除线

```markdown
~~删除线~~
```

预览：

~~删除线~~

### 列表

普通无序列表

```markdown
- 1
- 2
- 3
```

预览：

- 1
- 2
- 3

普通有序列表

```markdown
1. GPT-4
2. Claude Opus
3. LLaMa
```

预览：

1. GPT-4
2. Claude Opus
3. LLaMa

列表里可以继续嵌套语法

### 引用

```markdown
> 枪响，雷鸣，剑起。繁花血景。
```

预览：

> 枪响，雷鸣，剑起。繁花血景。

引用里也可以继续嵌套语法。

### 换行

markdown 分段落是需要空一行的。

```markdown
如果不空行
就会在一段

第一段

第二段
```

预览：

如果不空行
就会在一段

第一段

第二段

### 分隔符

如果你有写分割线的习惯，可以新起一行输入三个减号`---` 或者星号 `***`。当前后都有段落时，请空出一行：

```markdown
---
```

预览：

---

## 高级技巧

### 行内 HTML 元素

目前只支持部分段内 HTML 元素效果，包括 `<kdb> <b> <i> <em> <sup> <sub> <br>` ，如

#### 键位显示

```markdown
使用 <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>Del</kbd> 重启电脑
```

预览：

使用 <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>Del</kbd> 重启电脑

#### 粗斜体

```markdown
<b> Markdown 在此处同样适用，如 _加粗_ </b>
```

预览：

<b> Markdown 在此处同样适用，如 _加粗_ </b>

### 其他 HTML 写法

#### 折叠块

```markdown
<details><summary>点击展开</summary>它被隐藏了</details>
```

预览：

<details><summary>点击展开</summary>它被隐藏了</details>

### 表格

```markdown
| 表头1 | 表头2 |
| ----- | ----- |
| 内容1 | 内容2 |
```

预览：

| 表头1 | 表头2 |
| ----- | ----- |
| 内容1 | 内容2 |

### 注释

```markdown
在引用的地方使用 [^注释] 来添加注释。

然后在文档的结尾，添加注释的内容（会默认于文章结尾渲染之）。

[^注释]: 这里是注释的内容
```

预览：

在引用的地方使用 [^注释] 来添加注释。

然后在文档的结尾，添加注释的内容（会默认于文章结尾渲染之）。

[^注释]: 这里是注释的内容

### To-Do 列表

```markdown
- [ ] 未完成的任务
- [x] 已完成的任务
```

预览：

- [ ] 未完成的任务
- [x] 已完成的任务

### 符号转义

如果你的描述中需要用到 markdown 的符号，比如 \_ # \* 等，但又不想它被转义，这时候可以在这些符号前加反斜杠，如 `\_` `\#` `\*` 进行避免。

```markdown
\_不想这里的文本变斜体\_

\*\*不想这里的文本被加粗\*\*
```

预览：

\_不想这里的文本变斜体\_

\*\*不想这里的文本被加粗\*\*
