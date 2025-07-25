import DocsComponentDemo from '@/components/docs/docs-component-demo'

const InlineTextDemo = () => {
  const code = `<p>You can use the mark tag to <mark>highlight</mark> text.</p>
<p><del>This line of text is meant to be treated as deleted text.</del></p>
<p><s>This line of text is meant to be treated as no longer accurate.</s></p>
<p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
<p><u>This line of text will render as underlined.</u></p>
<p><small>This line of text is meant to be treated as fine print.</small></p>
<p><strong>This line rendered as bold text.</strong></p>
<p><em>This line rendered as italicized text.</em></p>
<p><a href="#">Inline link</a></p>`

  return (
    <section id="type-inline" className="docs-section pb-sm-2 mb-5">
      <h4>Inline text elements</h4>
      <DocsComponentDemo code={code}>
        <p>
          You can use the mark tag to <mark>highlight</mark> text.
        </p>
        <p>
          <del>This line of text is meant to be treated as deleted text.</del>
        </p>
        <p>
          <s>This line of text is meant to be treated as no longer accurate.</s>
        </p>
        <p>
          <ins>This line of text is meant to be treated as an addition to the document.</ins>
        </p>
        <p>
          <u>This line of text will render as underlined.</u>
        </p>
        <p>
          <small>This line of text is meant to be treated as fine print.</small>
        </p>
        <p>
          <strong>This line rendered as bold text.</strong>
        </p>
        <p>
          <em>This line rendered as italicized text.</em>
        </p>
        <p>
          <a href="#">Inline link</a>
        </p>
      </DocsComponentDemo>
    </section>
  )
}

export default InlineTextDemo
