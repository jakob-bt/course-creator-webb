import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player/youtube";

const Course = () => {
  const courses = JSON.parse(localStorage.getItem("courses"));
  const id = useParams().id;
  const course = courses.find((course) => course.id == id);
  return (
    <div>
      <section className="header">
        <Link to={`/`}>&#9001;</Link>
        <h1>Course Detail</h1>
      </section>
      <section className="list">
        <ReactPlayer url={course.videos.intro} />
        <h2>{course.name}</h2>
        <ul>
          <li>{course.description}</li>
          <li>{course.description}</li>
          <li>{course.description}</li>
        </ul>
        <h3>{course.description}</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
          ultrices nisl felis, id volutpat nunc pellentesque sit amet.
          Pellentesque ac dui eu quam vehicula maximus quis sed leo. Duis ac
          rutrum est. Maecenas porta erat sed congue facilisis. Fusce a
          convallis magna. Curabitur luctus erat in mauris condimentum, in
          malesuada elit rutrum. Aenean accumsan tellus enim, a auctor leo
          mattis quis. Mauris diam metus, convallis ac euismod nec, hendrerit
          quis purus. Integer in erat scelerisque metus maximus venenatis. Sed
          vehicula blandit mauris, ut fermentum massa finibus non. Donec
          lobortis erat dolor, id pharetra magna mollis in. Proin convallis
          dolor in erat fringilla fringilla. Aliquam feugiat sollicitudin metus,
          nec auctor sapien accumsan id. Donec auctor purus neque, maximus
          faucibus risus viverra vel. In volutpat lectus in erat aliquam mollis
          in condimentum mi. Suspendisse potenti. Vivamus pharetra nulla eget
          nunc ornare suscipit. Pellentesque pretium turpis nec gravida mattis.
          Aenean aliquet, sapien congue tincidunt lobortis, lectus mi mollis ex,
          id eleifend felis lacus a ligula. Ut tristique et libero at mollis.
          Nullam id diam ut lorem ultrices viverra. Aenean dignissim urna a
          ipsum sagittis, sit amet cursus tellus facilisis. Mauris fermentum
          tristique gravida. Sed egestas aliquam sodales. Morbi porta lorem sit
          amet est mattis dapibus. Nam non nisi bibendum, porttitor ex eu,
          fermentum est. Phasellus sem libero, bibendum eget fermentum id,
          sagittis mattis ex. Etiam at consectetur est. Phasellus vel felis
          vitae ex maximus maximus a eget sem. Pellentesque eget convallis
          ligula. In maximus iaculis tortor id semper. Ut ut nibh vel odio
          accumsan iaculis. Morbi vel dictum mauris. Sed sed pretium augue.
          Curabitur id suscipit mi. Curabitur eu tellus velit. Nam faucibus
          purus risus. Pellentesque dapibus nulla non auctor luctus. Integer
          vulputate, nunc et iaculis molestie, quam velit mollis elit, ac
          placerat nisi justo vitae lacus. Phasellus odio massa, faucibus eget
          elementum ut, tincidunt non erat. Aenean feugiat vel purus vel
          vestibulum. Aliquam molestie lectus in tortor dictum gravida. Nunc id
          lectus sagittis massa mattis sollicitudin. Fusce mollis porta tellus
          vel congue. Aliquam lorem dolor, vehicula quis felis vel, dignissim
          molestie arcu. Fusce condimentum eget est eu feugiat. Nulla facilisi.
          Nunc accumsan orci ac cursus pulvinar. Sed euismod nec elit ac
          finibus. Quisque consequat enim vitae lectus interdum, vel malesuada
          ligula luctus. Etiam a neque porta, vulputate diam eget, venenatis
          arcu. Nulla elementum gravida cursus. Praesent a augue in nisi
          scelerisque interdum nec a erat. Suspendisse lorem nibh, molestie eu
          malesuada eget, pretium ac lacus.
        </p>
      </section>
    </div>
  );
};

export default Course;
