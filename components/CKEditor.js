import { Component } from "react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import CKEditor from "@ckeditor/ckeditor5-react";

class CKEditorWrapper extends Component {
  render() {
    return (
      <div>
        <CKEditor
          editor={ClassicEditor}
          config={{
            toolbar: [
              "heading",
              "|",
              "bold",
              "italic",
              "link",
              "bulletedList",
              "numberedList",
              "blockQuote",
              "insertTable",
              "tableColumn",
              "tableRow"
            ]
          }}
          {...this.props}
        />
      </div>
    );
  }
}

export default CKEditorWrapper;
