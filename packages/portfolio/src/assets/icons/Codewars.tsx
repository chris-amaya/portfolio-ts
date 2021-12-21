import React from 'react'
interface Props {
  color?: string
}
export function Codewars({color}: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="ionicon"
      viewBox="0 0 32 32">
      <path
        fill={color ? color : '#fff'}
        d="M1.016 16.266l-.109-.052a1.374 1.374 0 01-.557-.589 2.034 2.034 0 01-.271-1l.026-.172c0-.266.068-.505.188-.734l.109-.198c.052-.109.13-.203.198-.292a.351.351 0 00.068-.323L.6 12.692a2.838 2.838 0 01-.13-.797l-.042-.161c0-.297.078-.589.266-.802l.135-.172c.094-.135.24-.214.401-.266.13-.042.224-.177.24-.333l.026-.453c0-.359.172-.693.438-.938l.323-.24c.063-.063.13-.13.182-.24.068-.078.083-.188.068-.266-.026-.13 0-.172.068-.188.214.083.349.057.443-.052l.172-.224.479-.536a.518.518 0 00.104-.557l-.156-.349c-.026-.078 0-.172.068-.198.172 0 .292.063.344.172l.052.094c.083.161.271.24.401.172a2.18 2.18 0 01.76-.13h.427c.292 0 .531-.203.589-.51.052-.37.182-.667.37-.865.203-.229.427-.401.693-.536.349-.182.563-.453.63-.797.094-.427.318-.734.625-.932l1.016-.573.292-.177c.172-.104.333-.24.469-.401l.266-.318a.902.902 0 01.427-.266c.13-.042.318-.068.479-.052l.531.036c.266 0 .479.068.693.161l.135.068c.135.052.266.026.333-.068l.12-.068.573-.599a.522.522 0 01.469-.161c.172.026.344.094.505.177.24.13.438.182.667.182h.135c.292 0 .583.042.88.109l.198.052a.513.513 0 00.531-.188.122.122 0 01.188-.026c.042.026.052.052.068.094.026.266.188.469.401.531l.214.068c.224.068.427.214.557.401.135.198.297.401.479.531l.135.135a.624.624 0 00.505.172h.786c.323 0 .63.057.938.188.292.135.599.161.875.052.297-.089.604-.13.911-.089l.573.089c.266.031.531.161.693.365l.068.063c.13.135.266.307.396.495a.5.5 0 00.453.266h.828c.203 0 .401.042.563.135.172.13.318.266.453.401l.13.172c.161.188.24.438.229.708 0 .214.161.396.37.396l.271.031c.188 0 .344.13.438.302l.135.271.344.771a.766.766 0 01.057.375c0 .13.036.24.13.292l.135.094a.61.61 0 01.24.563l-.094.625-.026.266a.43.43 0 00.161.401c.198.13.292.307.302.505v.266c0 .135-.026.297-.13.401a.643.643 0 00-.135.401l.042.307c0 .214.13.401.266.531a.833.833 0 01.323.563c.052.333.063.599.063.865v.307c0 .109 0 .214.042.318a.48.48 0 00.172.245l.266.198c.271.172.458.401.563.708.135.292.172.599.172.906v.104c0 .24-.026.495-.104.719a.968.968 0 00.036.667c.109.188.177.401.203.63.052.266.026.531-.068.745l-.026.094a1.192 1.192 0 01-.307.427c-.135.135-.266.214-.344.307-.083.078-.135.214-.094.333l.036.188c.068.266.068.531 0 .771v.109c-.052.198-.13.37-.214.531a.98.98 0 01-.396.401l-.203.13a.359.359 0 00-.161.297.51.51 0 01-.13.344l-.203.271c-.13.172-.302.318-.49.396a3.136 3.136 0 00-.469.401 1.47 1.47 0 00-.292.536.447.447 0 01-.443.37h-.719c-.188 0-.359.135-.438.297a1.8 1.8 0 01-.307.49 1.126 1.126 0 00-.271.479c-.026.161-.156.271-.292.214a.334.334 0 00-.427.135 3.11 3.11 0 01-.49.641l-.094.078c-.177.135-.401.24-.604.24-.24 0-.359.109-.396.266a2.46 2.46 0 00-.083.458 2.278 2.278 0 01-.13.438l-.068.078c-.135.203-.24.401-.375.573l-.052.083c-.172.224-.401.401-.667.464a2.62 2.62 0 01-.88.135h-.188a.453.453 0 00-.359.214l-.078.135-.083.156-.172.297a.997.997 0 01-.599.479 2.9 2.9 0 01-.854.078l-.214-.026c-.188 0-.359-.052-.531-.135-.135-.052-.323 0-.401.135a.916.916 0 01-.469.349l-.401.13a1.75 1.75 0 01-.839 0l-.214-.068a.761.761 0 01-.375-.13.72.72 0 00-.396-.083l-.177.031c-.266.026-.505 0-.745-.068l-.359-.083a.735.735 0 01-.401-.307.533.533 0 00-.401-.266H13.2c-.266-.036-.505-.13-.667-.333l-.531-.505-.188-.161-.292-.214-.172-.13a1.568 1.568 0 00-.698-.266l-.797-.135c-.083 0-.135-.026-.214-.042l-.307-.068c-.135-.026-.266-.13-.359-.266-.078-.13-.229-.188-.359-.13-.266.104-.479.13-.693.172h-.188a1.968 1.968 0 01-.99-.172c-.318-.135-.531-.333-.729-.589a1.079 1.079 0 00-.698-.453l-.37-.078a2.222 2.222 0 01-.776-.323c-.266-.188-.401-.359-.505-.573a1.683 1.683 0 01-.188-.667v-.104c-.026-.271-.214-.51-.464-.573a1.95 1.95 0 01-.734-.401.95.95 0 01-.297-.693l.031-.589c0-.229-.068-.427-.229-.573-.161-.161-.266-.359-.266-.573l-.042-.479a7.256 7.256 0 00-.172-1.042c-.078-.307.042-.615.292-.76l.094-.068a.331.331 0 00.109-.427l-.109-.13a.925.925 0 00-.401-.266c-.104-.031-.13-.135-.13-.203l.13-.161a.251.251 0 000-.318.641.641 0 01-.172-.375l-.026-.932c0-.188.026-.375.078-.557.057-.161 0-.349-.156-.427zm13.198-1.761c.094-.094.078-.266 0-.333a1.183 1.183 0 01-.307-.359l-.135-.214a1.814 1.814 0 00-.344-.453l-.026-.026a1.079 1.079 0 01-.307-.401.42.42 0 010-.401l.078-.13a.98.98 0 00.135-.479v-.057a.756.756 0 00-.135-.396 1.592 1.592 0 01-.13-.375v-.078a.548.548 0 01.104-.469c.109-.172.188-.333.229-.531v-.031a.513.513 0 00-.057-.438.491.491 0 01-.052-.427l.094-.266c.078-.24.203-.453.359-.641l.188-.198.135-.161.078-.078a.265.265 0 00.026-.323.62.62 0 01-.078-.401l.026-.188c.042-.266.135-.531.307-.745l.052-.052c.198-.266.453-.443.745-.536l.365-.13c.156-.052.266-.229.266-.401 0-.214.068-.401.187-.573l.063-.068c.135-.224.297-.453.401-.693l.094-.172a.276.276 0 00.042-.135c0-.224-.135-.427-.349-.438l-.583-.042c-.333-.026-.667 0-.99 0l-1.13.135c-.177 0-.307.13-.323.318a.435.435 0 01-.292.401l-.479.13-.135.042-.401.135a1.112 1.112 0 00-.667.599l-.104.172a1.613 1.613 0 01-.641.708c-.266.172-.401.453-.427.771v.135c-.026.266-.109.531-.266.719l-.068.109a.43.43 0 00-.068.453c.068.156.109.333.094.505v.708a.444.444 0 01-.266.396.568.568 0 00-.359.401l-.068.266a.682.682 0 00.266.698c.214.156.349.396.401.693v.24c.042.266.188.531.427.667.24.161.427.401.531.667l.068.214a.73.73 0 00.615.49h.078c.24 0 .453.135.589.349.13.214.344.359.583.401l.375.104c.229.068.443.188.615.359l.026.031a.344.344 0 00.469-.057l.094-.104zm1.52-1.224c.13.078.266.036.318-.083l.042-.063c.094-.188.214-.375.344-.536l.271-.401c.036 0 .052-.026.063-.052l.323-.427c.135-.13.292-.224.479-.224a.432.432 0 00.401-.266c.052-.188.13-.365.292-.51l.068-.078c.135-.135.266-.203.401-.266.172-.026.333-.057.495-.057h.396c.161 0 .297-.063.375-.198s.198-.224.333-.292l.135-.057c.214-.089.453-.156.693-.182l.266-.026c.161 0 .333 0 .495.089.13.094.307.083.438-.026l.094-.052c.198-.135.427-.24.667-.266h.026a3.25 3.25 0 01.776-.042h.13c.266.042.495.135.667.333l.042.052c.135.135.344.245.531.245h.229c.068 0 .13-.031.172-.094a.268.268 0 01.172-.083h.135c.188 0 .359.052.531.109l.229.094c.214.063.438.13.667.156h.161c.104 0 .172-.063.172-.156a.691.691 0 00-.094-.375l-.094-.214c-.104-.172-.188-.359-.266-.531l-.026-.068a.42.42 0 010-.401v-.068a.228.228 0 00-.135-.266h-.104a1.095 1.095 0 01-.536-.359l-.13-.135c-.135-.13-.214-.333-.271-.531-.063-.172-.208-.307-.396-.307h-.563a.75.75 0 01-.495-.292l-.052-.068a1.74 1.74 0 01-.224-.453c-.068-.135-.214-.214-.349-.172l-.161.052c-.266.094-.531.13-.797.104l-.214-.026c-.229 0-.443-.094-.615-.224l-.135-.094a1.344 1.344 0 00-.333-.188c-.13-.052-.24-.026-.318.068l-.068.078a.906.906 0 01-.505.266l-.719.042a.525.525 0 00-.359.161.774.774 0 01-.365.182h-.026c-.13 0-.266.094-.396.188v.026a.679.679 0 01-.484.203l-.052.026c-.161 0-.318 0-.479.042h-.161c-.224.036-.401.224-.453.464l-.052.307a1.37 1.37 0 01-.266.573c-.135.161-.297.266-.495.266h-.224c-.135.031-.271.177-.245.333.031.229 0 .427-.036.63l-.052.224a.62.62 0 01-.365.427l-.078.042h-.026c-.078.052-.135.172-.068.266a.61.61 0 01.094.401l-.042.427a.989.989 0 01-.13.438.411.411 0 00-.026.401l.13.292a.576.576 0 01.042.427.958.958 0 00-.052.401c0 .135.078.266.188.323zm10.532 9.641c.135.13.333.182.495.078l.266-.172a.747.747 0 00.292-.401v-.026l.135-.401.078-.135.057-.13.052-.094a.406.406 0 01.266-.229l.052-.026c.109-.026.177-.13.177-.24 0-.13.063-.24.13-.333l.109-.094.266-.344v-.026a.994.994 0 00.161-.365.665.665 0 00-.057-.396l-.026-.057a1.325 1.325 0 01-.094-.344l-.036-.375-.042-.401c0-.13.052-.266.135-.396.089-.109.156-.245.214-.375v-.052l.026-.026c.026-.135-.042-.271-.161-.271-.135-.063-.266-.172-.307-.333l-.042-.078a2.833 2.833 0 01-.104-.719l.026-.667v-.042a.405.405 0 00-.401-.401h-.026a.883.883 0 01-.667-.266l-.104-.135-.271-.302-.344-.401a3.087 3.087 0 00-.443-.51c-.13-.13-.333-.266-.531-.292l-.266-.042a1.375 1.375 0 01-.453-.182c-.109-.083-.266-.057-.375.052l-.172.188-.083.052c-.094.026-.182-.026-.224-.135a.682.682 0 01.026-.505v-.078c0-.094-.078-.161-.161-.135h-.214a1.64 1.64 0 01-.703-.13l-.135-.057a.996.996 0 00-.438-.104.76.76 0 00-.401.104l-.052.042a1.113 1.113 0 01-.536.172h-.438a.873.873 0 00-.536.177 1.632 1.632 0 01-.557.208l-.359.057a1.192 1.192 0 00-.484.224c-.13.135-.318.214-.49.266l-.068.031a.953.953 0 00-.531.396l-.161.161a.359.359 0 000 .427c.078.135.24.172.401.135l.198-.083c.104-.036.229 0 .318.052a.436.436 0 00.323.094l.333-.036c.188 0 .375 0 .557.052.203.068.375.135.536.266a.972.972 0 00.531.214c.203.026.401.068.589.135l.13.026c.135.042.245.13.323.266.068.109.13.266.13.401v.042c0 .156.135.266.271.266h.078c.214 0 .443.026.667.094l.094.036a.78.78 0 01.359.271c.109.13.172.266.214.396l.042.188c.036.203.052.401.052.615v.068c0 .13.094.266.24.318.135.026.292.083.443.161l.063.026c.177.104.349.24.479.401l.068.094c.177.198.266.453.266.703v.094c0 .203-.036.401-.104.589-.052.161 0 .349.172.401l.094.068c.203.078.375.224.505.396.135.203.188.427.188.667v.401c-.026.135-.063.24-.13.333s-.068.229 0 .323l.078.13zm-8.532-6.828h-.026c-.057 0-.083.068-.068.135l.052.266c.052.214.078.427.109.641.026.214.13.396.292.531h.052a.876.876 0 01.333.641v.667c-.026.13 0 .266.083.375l.063.063a.924.924 0 01.203.536l.036.734c0 .172-.104.318-.266.344l-.13.026c-.094 0-.135.109-.135.203 0 .104.042.224.078.333v.026c.042.13.057.266.042.401l-.052.359a2.524 2.524 0 01-.266.745l-.094.161a.58.58 0 01-.271.266.462.462 0 00-.266.292l-.104.479a2.936 2.936 0 01-.349.802h-.026a1.875 1.875 0 01-.599.531l-.161.109-.401.198a.42.42 0 00-.24.323l-.063.438c-.042.266-.135.495-.323.667l-.172.203-.203.198-.198.214c-.161.188-.401.266-.667.229l-.479-.094-.443-.057h-.12c-.052.057-.063.135-.026.214.094.161.24.271.401.271l.292.052c.135 0 .297.068.427.13.135.094.266.161.427.203h.026c.177.068.359.078.536.068l.198-.031c.229-.026.443 0 .625.083l.161.052c.068.026.172 0 .24-.068a.8.8 0 01.266-.172l.109-.026c.172-.052.344-.083.531-.083h.109c.156 0 .307.031.438.109l.052.026c.094.042.203 0 .271-.078.036-.094.13-.188.224-.266l.333-.229.214-.135.109-.063a.853.853 0 01.479-.135l.479-.042a.48.48 0 00.401-.344c.052-.203.13-.401.266-.573.135-.177.266-.323.401-.453a.927.927 0 01.531-.214h.109a.447.447 0 00.359-.453v-.896c.026-.13.078-.307.156-.438l.271-.401.104-.135c.083-.068.135-.156.229-.266l.13-.172c.083-.135.083-.307-.026-.427a.913.913 0 01-.224-.505v-.057a1.724 1.724 0 01.036-.667v-.063c.068-.177.161-.349.271-.51a.304.304 0 00-.042-.427l-.229-.198a.98.98 0 01-.318-.641l-.026-.266c0-.083 0-.172-.026-.266l-.026-.203a.77.77 0 00-.349-.531l-.094-.026a1.281 1.281 0 01-.375-.359c-.104-.135-.156-.323-.198-.51l-.042-.224c0-.083-.052-.135-.13-.172l-.641-.203c-.135-.026-.266-.13-.359-.224h-.026c-.083-.109-.214-.109-.297-.031l-.13.135c-.026.042-.057.052-.094.042-.083 0-.135-.068-.109-.135a.599.599 0 00-.224-.557l-.177-.135-.396-.266c-.109-.042-.271 0-.323.13l-.052.083c0 .026-.042.036-.052.052-.057 0-.135 0-.135-.068l-.042-.068c-.036-.078-.13-.13-.214-.156zm-1.599 1.333l-.068-.068c-.068-.052-.135-.042-.203.026a1.893 1.893 0 00-.214.51v.026c-.036.172-.198.292-.359.266h-.156a.34.34 0 00-.333.344c0 .24-.083.484-.229.667l-.078.083a1.133 1.133 0 01-.536.359l-.104.026a.359.359 0 00-.266.292c0 .135-.083.271-.188.375l-.135.104c-.161.177-.401.271-.641.297l-.667.068c-.214 0-.396.13-.531.333-.135.198-.333.333-.531.359l-.297.026a1.934 1.934 0 01-.667-.026l-.13-.026-.365-.094a.28.28 0 00-.318.094l-.135.172a.775.775 0 01-.667.266l-.865-.104c-.135 0-.24-.068-.359-.135-.135-.078-.229-.172-.323-.266L6.437 21c-.036-.026-.104-.042-.172-.026l-.188.078-.745.188c-.135.042-.307 0-.438-.078-.135-.109-.297-.135-.458-.135h-.172a.3.3 0 00-.214.375l.052.266c.042.135.031.292-.036.427s-.052.266.036.401l.083.104c.104.161.266.297.401.427.13.135.266.266.37.443l.203.359a.524.524 0 00.479.292c.198 0 .401.068.557.198l.401.375c.109.094.266.109.375.026l.068-.026c.078 0 .13.052.13.135v.068c0 .172.135.333.307.396l.599.135c.214.068.427.135.63.266h.104a.19.19 0 00.188-.214v-.464c0-.135.052-.271.161-.323l.068-.026c.063.026.13.078.104.135v.224c0 .172.052.333.172.453a.426.426 0 00.453.109c.161-.068.323-.083.495-.068l.495.026c.24.026.464 0 .667-.094.24-.078.438-.188.625-.333l.078-.052.401-.359a.67.67 0 01.469-.203h.531a.624.624 0 00.536-.531l.052-.266c0-.177.078-.333.198-.469.135-.135.266-.214.401-.266l.161-.068a.868.868 0 00.479-.531l.078-.323c.068-.266.203-.531.401-.703l.026-.031c.161-.13.188-.396.083-.583l-.042-.094a.554.554 0 01-.042-.505c.068-.188.135-.349.24-.51l.135-.188c.052-.104.052-.266-.026-.359a.611.611 0 01-.135-.37l-.026-.188v-.453a.989.989 0 00-.042-.443l-.052-.156zm-1.906-1.016v-.036c0-.135-.083-.214-.188-.214h-.349a.91.91 0 01-.375 0h-.599c-.307 0-.599-.057-.891-.135l-.323-.078-.266-.083-.599-.198a1.127 1.127 0 01-.708-.599l-.068-.135c-.094-.198-.292-.307-.49-.266-.229 0-.453 0-.667-.104l-.161-.068c-.307-.135-.531-.401-.531-.76l-.057-.359c-.036-.188-.156-.359-.318-.427a3.471 3.471 0 01-.536-.307L7.04 12.6a1.444 1.444 0 01-.469-.625l-.026-.078a1.257 1.257 0 01-.026-.667l.026-.083c.052-.172.068-.344.068-.531a.634.634 0 00-.188-.443l-.188-.172a.969.969 0 01-.359-.708 3.122 3.122 0 01.026-.854v-.078a.267.267 0 00-.266-.266h-.042c-.172 0-.318.104-.401.266a1.5 1.5 0 01-.292.479l-.052.068-.401.401c-.135.13-.214.333-.24.531a2.12 2.12 0 01-.161.589l-.026.068a.952.952 0 01-.307.401.572.572 0 00-.224.422l-.026.615c0 .266-.042.536-.135.802l-.026.104a.346.346 0 00.161.443l.557.24.052.026c.042 0 .057.026.068.068.042.052 0 .13-.042.13l-.13.068c-.078.026-.135.109-.161.203l-.026.13v.026l-.135.75c-.026.104-.026.224-.026.344a.26.26 0 00.161.24l.292.135c.135.078.297.172.401.266l.135.109a.46.46 0 00.156.13l.057.052a.616.616 0 01.188.307l.13.599c0 .161.135.297.266.333l.214.068s.042 0 .068.026l.266.083c.214.068.401.188.563.344.161.135.318.307.453.495l.052.052c.109.135.266.203.427.161s.333-.052.505-.052h.203c.13 0 .307.036.453.13.13.083.307.135.464.203h.042a.5.5 0 00.469-.052.751.751 0 01.479-.161l.625.036c.135 0 .266-.026.333-.13h.026l.229-.214.068-.068a.579.579 0 01.422-.198h.604c.156 0 .307-.135.37-.266a.508.508 0 01.359-.271l.271-.052c.104 0 .198-.094.24-.214a.624.624 0 01.198-.318l.214-.214a.741.741 0 00.229-.427z"></path>
    </svg>
  )
}

export default Codewars