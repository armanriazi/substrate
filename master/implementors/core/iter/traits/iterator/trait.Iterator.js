(function() {var implementors = {};
implementors["frame_support"] = [{"text":"impl&lt;T:&nbsp;<a class=\"trait\" href=\"frame_support/pallet_prelude/trait.Decode.html\" title=\"trait frame_support::pallet_prelude::Decode\">Decode</a> + <a class=\"trait\" href=\"frame_support/dispatch/marker/trait.Sized.html\" title=\"trait frame_support::dispatch::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"frame_support/storage/migration/struct.StorageIterator.html\" title=\"struct frame_support::storage::migration::StorageIterator\">StorageIterator</a>&lt;T&gt;","synthetic":false,"types":["frame_support::storage::migration::StorageIterator"]},{"text":"impl&lt;K:&nbsp;<a class=\"trait\" href=\"frame_support/pallet_prelude/trait.Decode.html\" title=\"trait frame_support::pallet_prelude::Decode\">Decode</a> + <a class=\"trait\" href=\"frame_support/dispatch/marker/trait.Sized.html\" title=\"trait frame_support::dispatch::marker::Sized\">Sized</a>, T:&nbsp;<a class=\"trait\" href=\"frame_support/pallet_prelude/trait.Decode.html\" title=\"trait frame_support::pallet_prelude::Decode\">Decode</a> + <a class=\"trait\" href=\"frame_support/dispatch/marker/trait.Sized.html\" title=\"trait frame_support::dispatch::marker::Sized\">Sized</a>, H:&nbsp;<a class=\"trait\" href=\"frame_support/trait.ReversibleStorageHasher.html\" title=\"trait frame_support::ReversibleStorageHasher\">ReversibleStorageHasher</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"frame_support/storage/migration/struct.StorageKeyIterator.html\" title=\"struct frame_support::storage::migration::StorageKeyIterator\">StorageKeyIterator</a>&lt;K, T, H&gt;","synthetic":false,"types":["frame_support::storage::migration::StorageKeyIterator"]},{"text":"impl&lt;T, OnRemoval:&nbsp;<a class=\"trait\" href=\"frame_support/storage/trait.PrefixIteratorOnRemoval.html\" title=\"trait frame_support::storage::PrefixIteratorOnRemoval\">PrefixIteratorOnRemoval</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"frame_support/storage/struct.PrefixIterator.html\" title=\"struct frame_support::storage::PrefixIterator\">PrefixIterator</a>&lt;T, OnRemoval&gt;","synthetic":false,"types":["frame_support::storage::PrefixIterator"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"frame_support/storage/struct.KeyPrefixIterator.html\" title=\"struct frame_support::storage::KeyPrefixIterator\">KeyPrefixIterator</a>&lt;T&gt;","synthetic":false,"types":["frame_support::storage::KeyPrefixIterator"]},{"text":"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"frame_support/storage/struct.ChildTriePrefixIterator.html\" title=\"struct frame_support::storage::ChildTriePrefixIterator\">ChildTriePrefixIterator</a>&lt;T&gt;","synthetic":false,"types":["frame_support::storage::ChildTriePrefixIterator"]}];
implementors["node_bench"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"node_bench/construct/struct.TransactionsIterator.html\" title=\"struct node_bench::construct::TransactionsIterator\">TransactionsIterator</a>","synthetic":false,"types":["node_bench::construct::TransactionsIterator"]}];
implementors["node_testing"] = [{"text":"impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"node_testing/bench/struct.BlockContentIterator.html\" title=\"struct node_testing::bench::BlockContentIterator\">BlockContentIterator</a>&lt;'a&gt;","synthetic":false,"types":["node_testing::bench::BlockContentIterator"]}];
implementors["sc_client_api"] = [{"text":"impl&lt;'a, State, Block&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"sc_client_api/backend/struct.KeyIterator.html\" title=\"struct sc_client_api::backend::KeyIterator\">KeyIterator</a>&lt;'a, State, Block&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Block: <a class=\"trait\" href=\"sp_runtime/traits/trait.Block.html\" title=\"trait sp_runtime::traits::Block\">BlockT</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;State: <a class=\"trait\" href=\"sc_client_api/backend/trait.StateBackend.html\" title=\"trait sc_client_api::backend::StateBackend\">StateBackend</a>&lt;<a class=\"type\" href=\"sp_runtime/traits/type.HashFor.html\" title=\"type sp_runtime::traits::HashFor\">HashFor</a>&lt;Block&gt;&gt;,&nbsp;</span>","synthetic":false,"types":["sc_client_api::backend::KeyIterator"]}];
implementors["sp_keyring"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"sp_keyring/sr25519/struct.KeyringIter.html\" title=\"struct sp_keyring::sr25519::KeyringIter\">KeyringIter</a>","synthetic":false,"types":["sp_keyring::sr25519::KeyringIter"]},{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"sp_keyring/ed25519/struct.KeyringIter.html\" title=\"struct sp_keyring::ed25519::KeyringIter\">KeyringIter</a>","synthetic":false,"types":["sp_keyring::ed25519::KeyringIter"]}];
implementors["sp_runtime"] = [{"text":"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html\" title=\"trait core::iter::traits::iterator::Iterator\">Iterator</a> for <a class=\"struct\" href=\"sp_runtime/offchain/http/struct.ResponseBody.html\" title=\"struct sp_runtime::offchain::http::ResponseBody\">ResponseBody</a>","synthetic":false,"types":["sp_runtime::offchain::http::ResponseBody"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()