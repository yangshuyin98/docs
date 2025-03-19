当然！Pandoc提供了丰富的命令和选项来转换文件。以下是一些常用的命令示例及其详细说明：

Pandoc是一个用于将一种标记格式转换为另[一种标记格式的Haskell](https://www.haskell.org)库，以及使用该库的命令行工具。

Pandoc可以在多种标记和文字处理格式之间转换，包括但不限于各种风格的[Markdown](https://daringfireball.net/projects/markdown/)，[HTML](https://www.w3.org/html/)，[LaTeX](https://www.latex-project.org/)和[Word docx](https://en.wikipedia.org/wiki/Office_Open_XML)。有关输入和输出格式的完整列表，请参阅[下面](https://pandoc.org/MANUAL.html#general-options)的[`--from`](https://pandoc.org/MANUAL.html#option--from)和[`--to`](https://pandoc.org/MANUAL.html#option--to)选项。Pandoc还可以生成[PDF](https://www.adobe.com/pdf/)输出：请参阅下面的[创建PDF](https://pandoc.org/MANUAL.html#creating-a-pdf)。

Pandoc的Markdown增强版包括[表格](https://pandoc.org/MANUAL.html#tables)、[定义列表](https://pandoc.org/MANUAL.html#definition-lists)、[元数据块](https://pandoc.org/MANUAL.html#metadata-blocks)、[脚注](https://pandoc.org/MANUAL.html#footnotes)、[引文](https://pandoc.org/MANUAL.html#citations)、[数学](https://pandoc.org/MANUAL.html#math)等语法。[Pandoc的Markdown](https://pandoc.org/MANUAL.html#pandocs-markdown)。

由于pandoc的文档中间表示形式不如它转换的许多格式具有表达性，因此不应期望在每种格式之间进行完美的转换。Pandoc试图保留文档的结构元素，但不保留格式细节，如边距大小。而且一些文档元素，比如复杂的表格，可能不适合pandoc的简单文档模型。虽然从pandoc的Markdown到所有格式的转换都渴望完美，但从比pandoc的Markdown更具表现力的格式转换可能会有损失。

### 基本命令结构

```
pandoc [OPTIONS] [FILES]
pandoc [options] [input-file]…
pandoc [选项] [输入文件].
```

- [OPTIONS]: 可选的命令选项。

- [FILES]: 需要转换的输入文件。

### 示例命令

#### 1. 转换Markdown为HTML

```
pandoc -s input.md -o output.html
```

- -s, --standalone: 生成一个独立的HTML文件，包含完整的文档头和尾。
- -o FILENAME, --output=FILENAME: 指定输出文件的名称和路径。

#### 2. 转换Markdown为PDF

```
pandoc -s input.md -o output.pdf
```

- 输出文件类型改为.pdf。

#### 3. 转换多个文件

```
pandoc -s file1.md file2.md -o output.html
```

- 多个输入文件合并成一个输出文件。

#### 4. 引入CSS样式

```
pandoc -s input.md -o output.html --css=mycss.css
```

- 使用--css选项引入自定义的CSS样式。

  

#### 5. 生成目录

```

pandoc -s input.md -o output.html --toc
```

- 在生成的HTML文件中自动生成目录。

#### 6. 转换Markdown为Word格式

```
pandoc -s input.md -o output.docx
```

```
-o FILE               --output=FILE
                        --data-dir=DIRECTORY
-s[true|false]        --standalone[=true|false]
                        --template=FILE
```

- 将Markdown转换为Word文档。
- 请注意，在某些输出格式（如HTML、LaTeX、ConTeXt、RTF、OPML、DocBook和Texinfo）中，有关字符编码的信息包含在文档标题中，只有在使用[`-s/--standalone`](https://pandoc.org/MANUAL.html#option--standalone)选项时才会包含。

#### 6. 转换Markdown为LaTeX格式

```
pandoc -f markdown -t latex hello.txt
```

```
-o FILE               --output=FILE
                        --data-dir=DIRECTORY
-s[true|false]        --standalone[=true|false]
                        --template=FILE
```

- 要将`hello.html`从HTML转换为Markdown：



#### 7. 转换Docx为Markdown

```
pandoc -s input.docx -t markdown -o output.md
```

```
  -t FORMAT, -w FORMAT  --to=FORMAT, --write=FORMAT
```



- 将Word文档转换为Markdown。

#### 8. 设置元数据变量

```
pandoc -s input.md -o output.html -V title="My Document" -V author="John Doe"
```

- 使用-V KEY[=VAL], --variable=KEY[:VAL]设置Pandoc变量值。

  

#### 9. 添加模板

```
pandoc -s input.md -o output.html --template my-template.html
```

- 使用--template TEMPLATE_FILE指定使用的模板文件。

#### 10. 包含外部资源

```
pandoc -s input.md -o output.html --resource-path=/path/to/resources/
```

- 使用--resource-path PATH指定查找外部资源的路径。

#### 11. 使用过滤器

```
pandoc -s input.md -o output.html --filter pandoc-crossref
```

- 使用--filter FILTER_NAME应用过滤器，例如pandoc-crossref用于处理交叉引用。

#### 12. 自动编号章节

```
pandoc -s input.md -o output.html --number-sections
```

- 使用--number-sections自动编号章节。

#### 13. 改变默认字体大小

```
pandoc -s input.md -o output.pdf --pdf-engine-opt=-ptsize=12
```

- 使用--pdf-engine-opt OPTION传递选项给PDF引擎。

### 更多选项

你可以通过以下命令查看更多详细的选项和帮助信息：

```
pandoc --help
```

此外，还有一些更高级的选项和技巧，可以根据具体需求进一步探索。希望这些示例对你有所帮助！

### 参考资料

- [Pandoc User Guide](https://pandoc.org/MANUAL.html)
- [Pandoc Options](https://pandoc.org/options.html)

如果有更多的具体需求或疑问，请随时提问！
