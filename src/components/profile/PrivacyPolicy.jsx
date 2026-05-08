export default function PrivacyPolicy() {
  const privacyContent = [
    {
      text: "Lorem ipsum dolor sit amet consectetur. In vel diam in rutrum pulvinar at nisi at. Ut arcu ut venenatis quis elit morbi ut. Vel tortor purus pretium orci eleifend. Eget viverra a in erat consequat viverra. Maecenas erat habitasse mattis tellus leo. Ut in pretium cras vitae. Pellentesque metus lorem nisi eget sollicitudin tristique luctus sem. Mauris aliquam in sapien aliquam. Vel iaculis donec diam mi neque etiam purus. Tincidunt condimentum sit quis sit vestibulum ultricies. Aliquet vulputate sit ullamcorper accumsan dignissim purus pharetra. Odio ac ut tincidunt quam pulvinar diam vel fermentum. Eget aliquam ullamcorper proin fermentum. Imperdiet fringilla convallis proin aliquet vitae nunc commodo senectus et. A augue ipsum leo vel nulla pharetra aliquam urna eget. Ut volutpat vel amet ornare. Velit quis ut integer diam erat magna pellentesque gravida. Facilisis eleifend tortor consequat adipiscing vel ut justo mi aliquam. In augue quis massa aliquam tortor diam cum sit. A auctor facilisis posuere at arcu ultricies. Tincidunt in tempor nibh odio. Viverra fermentum id adipiscing lectus libero et praesent. Risus a feugiat lectus lacus in fames sed. Tempus fusce malesuada blandit quis sem. Ultrices aliquet tempor faucibus ut elit pretium odio sem. Pellentesque urna phasellus a malesuada ridiculus cras blandit. Dolor vulputate fames a sit enim ut velit. Ut dignissim leo neque suscipit egestas cursus dignissim est at. Lacinia sagittis diam nunc feugiat feugiat id montes. Ut feugiat quis lorem leo cursus leo malesuada vitae ultricies. Ut est quis sit suscipit in metus. Eget nulla fringilla in nisl dolor odio enim nunc augue. Venenatis quis sed nulla nec integer justo. Quis purus morbi diam est sed. Molestie vitae auctor eget vivamus sed sagittis non phasellus. Risus eu lectus eget libero quam in fermentum ipsum. Et eu a consectetur est varius iaculis nisl sit. Quam nisl vitae nec risus nisi pellentesque."},
    {
      text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores."
    }
  ];

  return (
    <div className="w-full space-y-8">
      <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
      
      <div className="space-y-6">
        {privacyContent.map((section, index) => (
          <p key={index} className="text-gray-700 leading-relaxed text-base">
            {section.text}
          </p>
        ))}
      </div>
    </div>
  );
}
