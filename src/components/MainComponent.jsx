import React from "react";

function MainComponent() {
	return (
		<div id="wrapper">
			<header
				className="transparent scroll-dark"
				style={{ background: "#14141F" }}
			>
				<div
					className="container"
					style={{ paddingLeft: "60px", paddingRight: "60px" }}
				>
					<div className="row">
						<div className="col-md-12">
							<div className="de-flex sm-pt10">
								<div className="de-flex-col">
									<div className="de-flex-col">
										<div id="logo">
											<a href="03_grey-index.html">
												<img alt="" src="images/logo-5.png" />
											</a>
										</div>
									</div>
									<div className="de-flex-col">
										<input
											id="quick_search"
											className="xs-hide style-2"
											name="quick_search"
											placeholder="Search"
											type="text"
										/>
									</div>
								</div>
								<div className="de-flex-col header-col-mid">
									<ul id="mainmenu">
										<li>
											<a href="03_grey-index.html">
												Home<span></span>
											</a>
											<ul>
												<li>
													<a href="06_clivus-index.html">Homepage 1</a>
												</li>
												<li>
													<a href="06_clivus-index-2.html">Homepage 2</a>
												</li>
												<li>
													<a href="06_clivus-index-3.html">Homepage 3</a>
												</li>
												<li>
													<a href="06_clivus-index-4.html">Homepage 4</a>
												</li>
											</ul>
										</li>
										<li>
											<a href="03_grey-explore.html">
												Explore<span></span>
											</a>
											<ul>
												<li>
													<a href="03_grey-explore-2.html">All NFTs</a>
												</li>
												<li>
													<a href="03_grey-explore.html">Your NFTs</a>
												</li>
											</ul>
										</li>
										<li>
											<a href="03_grey-author.html">
												Author<span></span>
											</a>
											<ul>
												<li>
													<a href="03_grey-author.html">Author</a>
												</li>
												<li>
													<a href="03_grey-profile.html">Profile</a>
												</li>
												<li>
													<a href="03_grey-wallet.html">Wallet</a>
												</li>
												<li>
													<a href="03_grey-create-options.html">Create</a>
												</li>
												<li>
													<a href="03_grey-login.html">Login</a>
												</li>
											</ul>
										</li>
										<li>
											<a href="#">
												Stats<span></span>
											</a>
											<ul>
												<li>
													<a href="03_grey-activity.html">Activity</a>
												</li>
												<li>
													<a href="03_grey-rankings.html">Rankings</a>
												</li>
											</ul>
										</li>
									</ul>
									<div className="menu_side_area">
										<a
											href="03_grey-wallet.html"
											className="btn-main btn-wallet"
										>
											<i className="icon_wallet_alt"></i>
											<span>Connect Wallet</span>
										</a>
										<span id="menu-btn"></span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>
			<div className="no-top no-bottom" id="content">
				<div id="top"></div>
				<section
					id="section-hero"
					className="no-bottom"
					aria-label="section"
					style={{ background: "#14141F" }}
				>
					<div className="container">
						<div className="row">
							<div className="col-lg-9 mb-sm-30">
								<h2>Top Collections</h2>
								<div id="top_collections_filter" className="dropdown alt-1">
									<a href="#" className="btn-selector">
										30 days
									</a>
									<ul>
										<li className="active">
											<span>30 days</span>
										</li>
										<li>
											<span>1 day</span>
										</li>
										<li>
											<span>7 days</span>
										</li>
									</ul>
								</div>
								<div className="d-carousel">
									<div
										id="item-carousel-big-type-3"
										className="owl-carousel nft_alt_slider"
									>
										<div className="nft_pic">
											<a href="03_grey-item-details.html">
												<span className="nft_pic_info">
													<span className="nft_pic_title text-dark">
														AnimeSailorClub
													</span>
													<span className="nft_pic_by text-dark">
														Monica Lucas
													</span>
												</span>
											</a>
											<div className="nft_pic_wrap">
												<img
													src="images/items/big-4.jpg"
													className="lazy img-fluid"
													alt=""
												/>
											</div>
										</div>

										<div className="nft_pic nft_multi">
											<a href="03_grey-item-details.html">
												<div className="nft_pic_title">
													<h4>Gradient Boxes</h4>
													<span>Monica Lucas</span>
												</div>
												<img
													src="images/items/static-15.jpg"
													className="lazy img-fluid"
													alt=""
												/>
											</a>
											<a href="03_grey-item-details.html">
												<div className="nft_pic_title">
													<h4>Buccocervical</h4>
													<span>Ida Chapman</span>
												</div>
												<img
													src="images/items-alt/static-9.jpg"
													className="lazy img-fluid"
													alt=""
												/>
											</a>
											<a href="03_grey-item-details.html">
												<div className="nft_pic_title">
													<h4>Surfusion Underfalconer</h4>
													<span>Stacy Long</span>
												</div>
												<img
													src="images/items-alt/static-10.jpg"
													className="lazy img-fluid"
													alt=""
												/>
											</a>
											<a href="03_grey-item-details.html">
												<div className="nft_pic_title text-dark">
													<h4>The Truth</h4>
													<span>Franklin Greer</span>
												</div>
												<img
													src="images/items/anim-4.webp"
													className="lazy img-fluid"
													alt=""
												/>
											</a>
										</div>

										<div className="nft_pic nft_multi">
											<a href="03_grey-item-details.html">
												<div className="nft_pic_title text-dark">
													<h4>Oh Yeah!</h4>
													<span>Karla Sharp</span>
												</div>
												<img
													src="images/items/anim-6.webp"
													className="lazy img-fluid"
													alt=""
												/>
											</a>
											<a href="03_grey-item-details.html">
												<div className="nft_pic_title">
													<h4>Glass Cube</h4>
													<span>Mamie Barnet</span>
												</div>
												<img
													src="images/items/static-9.jpg"
													className="lazy img-fluid"
													alt=""
												/>
											</a>
											<a href="03_grey-item-details.html">
												<div className="nft_pic_title">
													<h4>Delectus Antiendotoxin</h4>
													<span>Monica Lucas</span>
												</div>
												<img
													src="images/items-alt/static-8.jpg"
													className="lazy img-fluid"
													alt=""
												/>
											</a>
											<a href="03_grey-item-details.html">
												<div className="nft_pic_title">
													<h4>Loop Donut</h4>
													<span>Lori Hart</span>
												</div>
												<img
													src="images/items/anim-5.webp"
													className="lazy img-fluid"
													alt=""
												/>
											</a>
										</div>

										<div className="nft_pic">
											<a href="03_grey-item-details.html">
												<span className="nft_pic_info">
													<span className="nft_pic_title">The Era of 90's</span>
													<span className="nft_pic_by">Gayle Hicks</span>
												</span>
											</a>
											<div className="nft_pic_wrap">
												<img
													src="images/items/big-3.jpg"
													className="lazy img-fluid"
													alt=""
												/>
											</div>
										</div>

										<div className="nft_pic nft_multi">
											<a href="03_grey-item-details.html">
												<div className="nft_pic_title text-dark">
													<h4>I Believe I Can Fly</h4>
													<span>Fred Ryan</span>
												</div>
												<img
													src="images/items/anim-8.webp"
													className="lazy img-fluid"
													alt=""
												/>
											</a>
											<a href="03_grey-item-details.html">
												<div className="nft_pic_title">
													<h4>Cute Island</h4>
													<span>Lori Hart</span>
												</div>
												<img
													src="images/items/static-17.jpg"
													className="lazy img-fluid"
													alt=""
												/>
											</a>
											<a href="03_grey-item-details.html">
												<div className="nft_pic_title text-dark">
													<h4>Cute Astronout</h4>
													<span>Lori Hart</span>
												</div>
												<img
													src="images/items/static-7.jpg"
													className="lazy img-fluid"
													alt=""
												/>
											</a>
											<a href="03_grey-item-details.html">
												<div className="nft_pic_title">
													<h4>Alien vs Predator</h4>
													<span>Monica Lucas</span>
												</div>
												<img
													src="images/items/static-16.jpg"
													className="lazy img-fluid"
													alt=""
												/>
											</a>
										</div>
									</div>
									<div className="d-arrow-left s2">
										<i className="fa fa-angle-left"></i>
									</div>
									<div className="d-arrow-right s2">
										<i className="fa fa-angle-right"></i>
									</div>
								</div>
							</div>
							<div className="col-lg-3 mb-sm-30">
								<h2>Top Sellers</h2>
								<ol
									className="author_list alt-1"
									style={{ marginLeft: "48px" }}
								>
									<li>
										<div
											className="author_list_pp"
											style={{ marginTop: "3px" }}
										>
											<a href="03_grey-author.html">
												<img
													className="lazy"
													src="images/author/author-2.jpg"
													alt=""
												/>
												<i className="fa fa-check"></i>
											</a>
										</div>
										<div
											className="author_list_info"
											style={{ marginTop: "3px" }}
										>
											<a href="03_grey-author.html">Mamie Barnett</a>
											<span>2.8 ETH</span>
										</div>
									</li>
									<li>
										<div
											className="author_list_pp"
											style={{ marginTop: "3px" }}
										>
											<a href="03_grey-author.html">
												<img
													className="lazy"
													src="images/author/author-1.jpg"
													alt=""
												/>
												<i className="fa fa-check"></i>
											</a>
										</div>
										<div
											className="author_list_info"
											style={{ marginTop: "3px" }}
										>
											<a href="03_grey-author.html">Monica Lucas</a>
											<span>3.2 ETH</span>
										</div>
									</li>
									<li>
										<div
											className="author_list_pp"
											style={{ marginTop: "3px" }}
										>
											<a href="03_grey-author.html">
												<img
													className="lazy"
													src="images/author/author-5.jpg"
													alt=""
												/>
												<i className="fa fa-check"></i>
											</a>
										</div>
										<div
											className="author_list_info"
											style={{ marginTop: "3px" }}
										>
											<a href="03_grey-author.html">Jimmy Wright</a>
											<span>1.9 ETH</span>
										</div>
									</li>

									<li>
										<div
											className="author_list_pp"
											style={{ marginTop: "3px" }}
										>
											<a href="03_grey-author.html">
												<img
													className="lazy"
													src="images/author/author-4.jpg"
													alt=""
												/>
												<i className="fa fa-check"></i>
											</a>
										</div>
										<div
											className="author_list_info"
											style={{ marginTop: "3px" }}
										>
											<a href="03_grey-author.html">Lori Hart</a>
											<span>2.2 ETH</span>
										</div>
									</li>

									<li>
										<div
											className="author_list_pp"
											style={{ marginTop: "3px" }}
										>
											<a href="03_grey-author.html">
												<img
													className="lazy"
													src="images/author/author-6.jpg"
													alt=""
												/>
												<i className="fa fa-check"></i>
											</a>
										</div>
										<div
											className="author_list_info"
											style={{ marginTop: "3px" }}
										>
											<a href="03_grey-author.html">Karla Sharp</a>
											<span>1.6 ETH</span>
										</div>
									</li>
									<li>
										<div
											className="author_list_pp"
											style={{ marginTop: "3px" }}
										>
											<a href="03_grey-author.html">
												<img
													className="lazy"
													src="images/author/author-7.jpg"
													alt=""
												/>
												<i className="fa fa-check"></i>
											</a>
										</div>
										<div
											className="author_list_info"
											style={{ marginTop: "3px" }}
										>
											<a href="03_grey-author.html">Gayle Hicks</a>
											<span>1.5 ETH</span>
										</div>
									</li>
									<li>
										<div
											className="author_list_pp"
											style={{ marginTop: "3px" }}
										>
											<a href="03_grey-author.html">
												<img
													className="lazy"
													src="images/author/author-3.jpg"
													alt=""
												/>
												<i className="fa fa-check"></i>
											</a>
										</div>
										<div
											className="author_list_info"
											style={{ marginTop: "3px" }}
										>
											<a href="03_grey-author.html">Nicholas Daniels</a>
											<span>2.5 ETH</span>
										</div>
									</li>
								</ol>
							</div>
						</div>
					</div>
				</section>

				<section
					aria-label="section"
					className="pt40 no-bottom"
					style={{ background: "#14141F" }}
				>
					<div className="container">
						<div className="row">
							<div className="col-lg-12">
								<div className="text-center">
									<h2>Supported Wallet</h2>
									<div className="small-border bg-color-2"></div>
								</div>
							</div>

							<div className="col-lg-2 col-sm-4 col-6 mb30">
								<a className="box-url style-2" href="login.html">
									<div className="box-url-inner">
										<img src="images/wallet/1.png" alt="" className="mb20" />
										<h4>Metamask</h4>
									</div>
								</a>
							</div>

							<div className="col-lg-2 col-sm-4 col-6 mb30">
								<a className="box-url style-2" href="login.html">
									<div className="box-url-inner">
										<img src="images/wallet/2.png" alt="" className="mb20" />
										<h4>Bitski</h4>
									</div>
								</a>
							</div>

							<div className="col-lg-2 col-sm-4 col-6 mb30">
								<a className="box-url style-2" href="login.html">
									<div className="box-url-inner">
										<img src="images/wallet/3.png" alt="" className="mb20" />
										<h4>Fortmatic</h4>
									</div>
								</a>
							</div>

							<div className="col-lg-2 col-sm-4 col-6 mb30">
								<a className="box-url style-2" href="login.html">
									<div className="box-url-inner">
										<img src="images/wallet/4.png" alt="" className="mb20" />
										<h4>WalletConnect</h4>
									</div>
								</a>
							</div>

							<div className="col-lg-2 col-sm-4 col-6 mb30">
								<a className="box-url style-2" href="login.html">
									<div className="box-url-inner">
										<img src="images/wallet/5.png" alt="" className="mb20" />
										<h4>Coinbase</h4>
									</div>
								</a>
							</div>

							<div className="col-lg-2 col-sm-4 col-6 mb30">
								<a className="box-url style-2" href="login.html">
									<div className="box-url-inner">
										<img src="images/wallet/6.png" alt="" className="mb20" />
										<h4>Arkane</h4>
									</div>
								</a>
							</div>
						</div>
					</div>
				</section>

				<section
					id="section-collections"
					className="pt30 pb30"
					style={{ background: "#14141F" }}
				>
					<div className="container">
						<div className="row">
							<div className="col-lg-12">
								<div className="text-center">
									<h2>New Items</h2>
									<div className="small-border bg-color-2"></div>
								</div>
							</div>

							<div id="items-carousel" className="owl-carousel">
								<div className="d-item">
									<div className="nft__item style-2">
										<div
											className="de_countdown"
											data-year="2023"
											data-month="2"
											data-day="6"
											data-hour="8"
										></div>
										<div className="author_list_pp">
											<a
												href="03_grey-author.html"
												data-bs-toggle="tooltip"
												data-bs-placement="top"
												title="Creator: Monica Lucas"
											>
												<img
													className="lazy"
													src="images/author/author-1.jpg"
													alt=""
												/>
												<i className="fa fa-check"></i>
											</a>
										</div>
										<div className="nft__item_wrap">
											<div className="nft__item_extra">
												<div className="nft__item_buttons">
													<button onClick="location.href='03_grey-item-details.html'">
														Buy Now
													</button>
													<div className="nft__item_share">
														<h4>Share</h4>
														<a
															href="https://www.facebook.com/sharer/sharer.php?u=https://madebydesignesia.com/themes"
															target="_blank"
														>
															<i className="fa fa-facebook fa-lg"></i>
														</a>
														<a
															href="https://twitter.com/intent/tweet?url=https://madebydesignesia.com/themes"
															target="_blank"
														>
															<i className="fa fa-twitter fa-lg"></i>
														</a>
														<a href="mailto:?subject=I wanted you to see this site&amp;body=Check out this site https://madebydesignesia.com/themes">
															<i className="fa fa-envelope fa-lg"></i>
														</a>
													</div>
												</div>
											</div>
											<a href="03_grey-item-details.html">
												<img
													src="images/items-alt/static-8.jpg"
													className="lazy nft__item_preview"
													alt=""
												/>
											</a>
										</div>
										<div className="nft__item_info">
											<a href="03_grey-item-details.html">
												<h4>Delectus Antiendotoxin</h4>
											</a>
											<div className="nft__item_click">
												<span></span>
											</div>
											<div className="nft__item_price">
												0.08 ETH<span>1/20</span>
											</div>
											<div className="nft__item_action">
												<a href="#">Place a bid</a>
											</div>
											<div className="nft__item_like">
												<i className="fa fa-heart"></i>
												<span>50</span>
											</div>
										</div>
									</div>
								</div>
								<div className="d-item">
									<div className="nft__item style-2 nft_type_music">
										<div className="author_list_pp">
											<a
												href="author.html"
												data-bs-toggle="tooltip"
												data-bs-placement="top"
												title="Creator: Mamie Barnett"
											>
												<img
													className="lazy"
													src="images/author/author-2.jpg"
													alt=""
												/>
												<i className="fa fa-check"></i>
											</a>
										</div>
										<div className="nft__item_wrap">
											<div className="nft__item_extra">
												<div className="nft__item_buttons">
													<button onClick="location.href='item-details.html'">
														Buy Now
													</button>
													<div className="nft__item_share">
														<h4>Share</h4>
														<a
															href="https://www.facebook.com/sharer/sharer.php?u=https://madebydesignesia.com/themes"
															target="_blank"
														>
															<i className="fa fa-facebook fa-lg"></i>
														</a>
														<a
															href="https://twitter.com/intent/tweet?url=https://madebydesignesia.com/themes"
															target="_blank"
														>
															<i className="fa fa-twitter fa-lg"></i>
														</a>
														<a href="mailto:?subject=I wanted you to see this site&amp;body=Check out this site https://madebydesignesia.com/themes">
															<i className="fa fa-envelope fa-lg"></i>
														</a>
													</div>
												</div>
											</div>
											<div className="nft_type_wrap">
												<audio
													className="track"
													src="https://designesia.com/Cig Swaag - Jingle Punks.mp3"
													type="audio/mpeg"
												></audio>

												<div className="player-container">
													<div className="play-pause"></div>
												</div>

												<div className="circle-ripple"></div>
											</div>
											<a href="item-details-audio.html">
												<div className="d-placeholder"></div>
												<img
													src="images/items/music-1.jpg"
													className="lazy nft__item_preview"
													alt=""
												/>
											</a>
										</div>
										<div className="nft__item_info">
											<a href="item-details.html">
												<h4>Cig Swaag</h4>
											</a>
											<div className="nft__item_click">
												<span></span>
											</div>
											<div className="nft__item_price">
												0.08 ETH<span>1/20</span>
											</div>
											<div className="nft__item_action">
												<a href="#">Place a bid</a>
											</div>
											<div className="nft__item_like">
												<i className="fa fa-heart"></i>
												<span>50</span>
											</div>
										</div>
									</div>
								</div>
								<div className="d-item">
									<div className="nft__item style-2">
										<div
											className="de_countdown"
											data-year="2023"
											data-month="2"
											data-day="16"
											data-hour="8"
										></div>
										<div className="author_list_pp">
											<a
												href="author.html"
												data-bs-toggle="tooltip"
												data-bs-placement="top"
												title="Creator: Nicholas Daniel"
											>
												<img
													className="lazy"
													src="images/author/author-3.jpg"
													alt=""
												/>
												<i className="fa fa-check"></i>
											</a>
										</div>
										<div className="nft__item_wrap">
											<div className="nft__item_extra">
												<div className="nft__item_buttons">
													<button onClick="location.href='item-details.html'">
														Buy Now
													</button>
													<div className="nft__item_share">
														<h4>Share</h4>
														<a
															href="https://www.facebook.com/sharer/sharer.php?u=https://madebydesignesia.com/themes"
															target="_blank"
														>
															<i className="fa fa-facebook fa-lg"></i>
														</a>
														<a
															href="https://twitter.com/intent/tweet?url=https://madebydesignesia.com/themes"
															target="_blank"
														>
															<i className="fa fa-twitter fa-lg"></i>
														</a>
														<a href="mailto:?subject=I wanted you to see this site&amp;body=Check out this site https://madebydesignesia.com/themes">
															<i className="fa fa-envelope fa-lg"></i>
														</a>
													</div>
												</div>
											</div>
											<a href="03_grey-item-details.html">
												<video
													autoPlay
													muted
													loop
													playsInline
													preload="metadata"
												>
													<source
														src="video/sample-video-1.mp4"
														type="video/mp4"
													/>
												</video>
											</a>
										</div>
										<div className="nft__item_info">
											<a href="03_grey-item-details.html">
												<h4>Superwager Epidesmine</h4>
											</a>
											<div className="nft__item_click">
												<span></span>
											</div>
											<div className="nft__item_price">
												0.08 ETH<span>1/20</span>
											</div>
											<div className="nft__item_action">
												<a href="#">Place a bid</a>
											</div>
											<div className="nft__item_like">
												<i className="fa fa-heart"></i>
												<span>50</span>
											</div>
										</div>
									</div>
								</div>
								<div className="d-item">
									<div className="nft__item style-2">
										<div className="author_list_pp">
											<a
												href="03_grey-author.html"
												data-bs-toggle="tooltip"
												data-bs-placement="top"
												title="Creator: Fred Ryan"
											>
												<img
													className="lazy"
													src="images/author/author-12.jpg"
													alt=""
												/>
												<i className="fa fa-check"></i>
											</a>
										</div>
										<div className="nft__item_wrap">
											<div className="nft__item_extra">
												<div className="nft__item_buttons">
													<button onClick="location.href='03_grey-item-details.html'">
														Buy Now
													</button>
													<div className="nft__item_share">
														<h4>Share</h4>
														<a
															href="https://www.facebook.com/sharer/sharer.php?u=https://madebydesignesia.com/themes"
															target="_blank"
														>
															<i className="fa fa-facebook fa-lg"></i>
														</a>
														<a
															href="https://twitter.com/intent/tweet?url=https://madebydesignesia.com/themes"
															target="_blank"
														>
															<i className="fa fa-twitter fa-lg"></i>
														</a>
														<a href="mailto:?subject=I wanted you to see this site&amp;body=Check out this site https://madebydesignesia.com/themes">
															<i className="fa fa-envelope fa-lg"></i>
														</a>
													</div>
												</div>
											</div>
											<a href="03_grey-item-details.html">
												<img
													src="images/items-alt/static-7.jpg"
													className="lazy nft__item_preview"
													alt=""
												/>
											</a>
										</div>
										<div className="nft__item_info">
											<a href="03_grey-item-details.html">
												<h4>AnimeSailorClub #304</h4>
											</a>
											<div className="nft__item_click">
												<span></span>
											</div>
											<div className="nft__item_price">
												0.02 ETH<span>1/15</span>
											</div>
											<div className="nft__item_action">
												<a href="#">Place a bid</a>
											</div>
											<div className="nft__item_like">
												<i className="fa fa-heart"></i>
												<span>73</span>
											</div>
										</div>
									</div>
								</div>
								<div className="d-item">
									<div className="nft__item style-2">
										<div className="author_list_pp">
											<a
												href="03_grey-author.html"
												data-bs-toggle="tooltip"
												data-bs-placement="top"
												title="Creator: Franklin Greer"
											>
												<img
													className="lazy"
													src="images/author/author-9.jpg"
													alt=""
												/>
												<i className="fa fa-check"></i>
											</a>
										</div>
										<div className="nft__item_wrap">
											<div className="nft__item_extra">
												<div className="nft__item_buttons">
													<button onClick="location.href='03_grey-item-details.html'">
														Buy Now
													</button>
													<div className="nft__item_share">
														<h4>Share</h4>
														<a
															href="https://www.facebook.com/sharer/sharer.php?u=https://madebydesignesia.com/themes"
															target="_blank"
														>
															<i className="fa fa-facebook fa-lg"></i>
														</a>
														<a
															href="https://twitter.com/intent/tweet?url=https://madebydesignesia.com/themes"
															target="_blank"
														>
															<i className="fa fa-twitter fa-lg"></i>
														</a>
														<a href="mailto:?subject=I wanted you to see this site&amp;body=Check out this site https://madebydesignesia.com/themes">
															<i className="fa fa-envelope fa-lg"></i>
														</a>
													</div>
												</div>
											</div>
											<a href="03_grey-item-details.html">
												<img
													src="images/items/anim-4.webp"
													className="lazy nft__item_preview"
													alt=""
												/>
											</a>
										</div>
										<div className="nft__item_info">
											<a href="03_grey-item-details.html">
												<h4>The Truth</h4>
											</a>
											<div className="nft__item_click">
												<span></span>
											</div>
											<div className="nft__item_price">
												0.06 ETH<span>1/20</span>
											</div>
											<div className="nft__item_action">
												<a href="#">Place a bid</a>
											</div>
											<div className="nft__item_like">
												<i className="fa fa-heart"></i>
												<span>26</span>
											</div>
										</div>
									</div>
								</div>
								<div className="d-item">
									<div className="nft__item style-2">
										<div
											className="de_countdown id-color"
											data-year="2023"
											data-month="2"
											data-day="15"
											data-hour="10"
										></div>
										<div className="author_list_pp">
											<a
												href="03_grey-author.html"
												data-bs-toggle="tooltip"
												data-bs-placement="top"
												title="Creator: Mamie Barnett"
											>
												<img
													className="lazy"
													src="images/author/author-2.jpg"
													alt=""
												/>
												<i className="fa fa-check"></i>
											</a>
										</div>
										<div className="nft__item_wrap">
											<div className="nft__item_extra">
												<div className="nft__item_buttons">
													<button onClick="location.href='03_grey-item-details.html'">
														Buy Now
													</button>
													<div className="nft__item_share">
														<h4>Share</h4>
														<a
															href="https://www.facebook.com/sharer/sharer.php?u=https://madebydesignesia.com/themes"
															target="_blank"
														>
															<i className="fa fa-facebook fa-lg"></i>
														</a>
														<a
															href="https://twitter.com/intent/tweet?url=https://madebydesignesia.com/themes"
															target="_blank"
														>
															<i className="fa fa-twitter fa-lg"></i>
														</a>
														<a href="mailto:?subject=I wanted you to see this site&amp;body=Check out this site https://madebydesignesia.com/themes">
															<i className="fa fa-envelope fa-lg"></i>
														</a>
													</div>
												</div>
											</div>
											<a href="03_grey-item-details.html">
												<img
													src="images/items-alt/static-5.jpg"
													className="lazy nft__item_preview"
													alt=""
												/>
											</a>
										</div>
										<div className="nft__item_info">
											<a href="03_grey-item-details.html">
												<h4>Running Puppets</h4>
											</a>
											<div className="nft__item_click">
												<span></span>
											</div>
											<div className="nft__item_price">
												0.03 ETH<span>1/24</span>
											</div>
											<div className="nft__item_action">
												<a href="#">Place a bid</a>
											</div>
											<div className="nft__item_like">
												<i className="fa fa-heart"></i>
												<span>45</span>
											</div>
										</div>
									</div>
								</div>
								<div className="d-item">
									<div className="nft__item style-2">
										<div className="author_list_pp">
											<a
												href="03_grey-author.html"
												data-bs-toggle="tooltip"
												data-bs-placement="top"
												title="Creator: Nicholas Daniels"
											>
												<img
													className="lazy"
													src="images/author/author-3.jpg"
													alt=""
												/>
												<i className="fa fa-check"></i>
											</a>
										</div>
										<div className="nft__item_wrap">
											<div className="nft__item_extra">
												<div className="nft__item_buttons">
													<button onClick="location.href='03_grey-item-details.html'">
														Buy Now
													</button>
													<div className="nft__item_share">
														<h4>Share</h4>
														<a
															href="https://www.facebook.com/sharer/sharer.php?u=https://madebydesignesia.com/themes"
															target="_blank"
														>
															<i className="fa fa-facebook fa-lg"></i>
														</a>
														<a
															href="https://twitter.com/intent/tweet?url=https://madebydesignesia.com/themes"
															target="_blank"
														>
															<i className="fa fa-twitter fa-lg"></i>
														</a>
														<a href="mailto:?subject=I wanted you to see this site&amp;body=Check out this site https://madebydesignesia.com/themes">
															<i className="fa fa-envelope fa-lg"></i>
														</a>
													</div>
												</div>
											</div>
											<a href="03_grey-item-details.html">
												<img
													src="images/items-alt/static-6.jpg"
													className="lazy nft__item_preview"
													alt=""
												/>
											</a>
										</div>
										<div className="nft__item_info">
											<a href="03_grey-item-details.html">
												<h4>Green Frogman</h4>
											</a>
											<div className="nft__item_click">
												<span></span>
											</div>
											<div className="nft__item_price">
												0.09 ETH<span>1/25</span>
											</div>
											<div className="nft__item_action">
												<a href="#">Place a bid</a>
											</div>
											<div className="nft__item_like">
												<i className="fa fa-heart"></i>
												<span>76</span>
											</div>
										</div>
									</div>
								</div>
								<div className="d-item">
									<div className="nft__item style-2">
										<div
											className="de_countdown id-color"
											data-year="2023"
											data-month="2"
											data-day="8"
											data-hour="8"
										></div>
										<div className="author_list_pp">
											<a
												href="03_grey-author.html"
												data-bs-toggle="tooltip"
												data-bs-placement="top"
												title="Creator: Gigaland"
											>
												<img
													className="lazy"
													src="images/author/author-4.jpg"
													alt=""
												/>
												<i className="fa fa-check"></i>
											</a>
										</div>
										<div className="nft__item_wrap">
											<div className="nft__item_extra">
												<div className="nft__item_buttons">
													<button onClick="location.href='03_grey-item-details.html'">
														Buy Now
													</button>
													<div className="nft__item_share">
														<h4>Share</h4>
														<a
															href="https://www.facebook.com/sharer/sharer.php?u=https://madebydesignesia.com/themes"
															target="_blank"
														>
															<i className="fa fa-facebook fa-lg"></i>
														</a>
														<a
															href="https://twitter.com/intent/tweet?url=https://madebydesignesia.com/themes"
															target="_blank"
														>
															<i className="fa fa-twitter fa-lg"></i>
														</a>
														<a href="mailto:?subject=I wanted you to see this site&amp;body=Check out this site https://madebydesignesia.com/themes">
															<i className="fa fa-envelope fa-lg"></i>
														</a>
													</div>
												</div>
											</div>
											<a href="03_grey-item-details.html">
												<img
													src="images/items/anim-5.webp"
													className="lazy nft__item_preview"
													alt=""
												/>
											</a>
										</div>
										<div className="nft__item_info">
											<a href="03_grey-item-details.html">
												<h4>Loop Donut</h4>
											</a>
											<div className="nft__item_click">
												<span></span>
											</div>
											<div className="nft__item_price">
												0.09 ETH<span>1/14</span>
											</div>
											<div className="nft__item_action">
												<a href="#">Place a bid</a>
											</div>
											<div className="nft__item_like">
												<i className="fa fa-heart"></i>
												<span>94</span>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section
					id="section-text"
					className="no-top"
					style={{ background: "#14141F" }}
				>
					<div className="container">
						<div className="row">
							<div className="col-lg-12">
								<div className="text-center">
									<h2>Create and Sell</h2>
									<div className="small-border bg-color-2"></div>
								</div>
							</div>

							<div className="col-lg-4 col-md-6 mb-sm-30">
								<div className="feature-box f-boxed style-3">
									<i className="bg-color-2 i-boxed icon_wallet"></i>
									<div className="text">
										<h4>Set up your wallet</h4>
										<p data-wow-delay=".25s">
											Sed ut perspiciatis unde omnis iste natus error sit
											voluptatem accusantium doloremque laudantium, totam rem.
										</p>
									</div>
									<i className="wm icon_wallet"></i>
								</div>
							</div>
							<div className="col-lg-4 col-md-6 mb-sm-30">
								<div className="feature-box f-boxed style-3">
									<i className="bg-color-2 i-boxed icon_cloud-upload_alt"></i>
									<div className="text">
										<h4 className="">Add your NFT's</h4>
										<p className="" data-wow-delay=".25s">
											Sed ut perspiciatis unde omnis iste natus error sit
											voluptatem accusantium doloremque laudantium, totam rem.
										</p>
									</div>
									<i className="wm icon_cloud-upload_alt"></i>
								</div>
							</div>
							<div className="col-lg-4 col-md-6 mb-sm-30">
								<div className="feature-box f-boxed style-3">
									<i className="bg-color-2 i-boxed icon_tags_alt"></i>
									<div className="text">
										<h4 className="">Sell your NFT's</h4>
										<p className="" data-wow-delay=".25s">
											Sed ut perspiciatis unde omnis iste natus error sit
											voluptatem accusantium doloremque laudantium, totam rem.
										</p>
									</div>
									<i className="wm icon_tags_alt"></i>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>

			<div
				className="modal fade"
				id="place_a_bid"
				tabIndex="-1"
				aria-labelledby="place_a_bid"
				aria-hidden="true"
			>
				<div className="modal-dialog modal-dialog-centered de-modal">
					<div className="modal-content">
						<button
							type="button"
							className="btn-close"
							data-bs-dismiss="modal"
							aria-label="Close"
						></button>
						<div className="modal-body">
							<div className="p-3 form-border">
								<h3>Place a Bid</h3>
								You are about to place a bid for <b>
									Alien vs Predator
								</b> from <b>Monica Lucas</b>
								<div className="spacer-single"></div>
								<h6>Your bid (ETH)</h6>
								<input
									type="text"
									name="bid_value"
									id="bid_value"
									className="form-control"
									placeholder="Enter bid"
								/>
								<div className="spacer-single"></div>
								<h6>
									Enter quantity.{" "}
									<span className="id-color-2">10 available</span>
								</h6>
								<input
									type="text"
									name="bid_qty"
									id="bid_qty"
									className="form-control"
									value="1"
								/>
								<div className="spacer-single"></div>
								<div className="de-flex">
									<div>Your bidding balance</div>
									<div>
										<b>0.013325 ETH</b>
									</div>
								</div>
								<div className="de-flex">
									<div>Your balance</div>
									<div>
										<b>10.67856 ETH</b>
									</div>
								</div>
								<div className="de-flex">
									<div>Service fee 2.5%</div>
									<div>
										<b>0.00325 ETH</b>
									</div>
								</div>
								<div className="de-flex">
									<div>You will pay</div>
									<div>
										<b>0.013325 ETH</b>
									</div>
								</div>
								<div className="spacer-single"></div>
								<a
									href="03_grey-wallet.html"
									target="_blank"
									className="btn-main btn-fullwidth"
								>
									Place a bid
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>

			<a href="#" id="back-to-top"></a>

			<footer>
				<div className="container">
					<div className="row">
						<div className="col-md-3 col-sm-6 col-xs-1">
							<div className="widget">
								<h5>Marketplace</h5>
								<ul>
									<li>
										<a href="#">All NFTs</a>
									</li>
									<li>
										<a href="#">Art</a>
									</li>
									<li>
										<a href="#">Music</a>
									</li>
									<li>
										<a href="#">Domain Names</a>
									</li>
									<li>
										<a href="#">Virtual World</a>
									</li>
									<li>
										<a href="#">Collectibles</a>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-md-3 col-sm-6 col-xs-1">
							<div className="widget">
								<h5>Resources</h5>
								<ul>
									<li>
										<a href="#">Help Center</a>
									</li>
									<li>
										<a href="#">Partners</a>
									</li>
									<li>
										<a href="#">Suggestions</a>
									</li>
									<li>
										<a href="#">Discord</a>
									</li>
									<li>
										<a href="#">Docs</a>
									</li>
									<li>
										<a href="#">Newsletter</a>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-md-3 col-sm-6 col-xs-1">
							<div className="widget">
								<h5>Community</h5>
								<ul>
									<li>
										<a href="#">Community</a>
									</li>
									<li>
										<a href="#">Documentation</a>
									</li>
									<li>
										<a href="#">Brand Assets</a>
									</li>
									<li>
										<a href="#">Blog</a>
									</li>
									<li>
										<a href="#">Forum</a>
									</li>
									<li>
										<a href="#">Mailing List</a>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-md-3 col-sm-6 col-xs-1">
							<div className="widget">
								<h5>Newsletter</h5>
								<p>Signup for our newsletter</p>
								<form
									action="blank.php"
									className="row form-dark"
									id="form_subscribe"
									method="post"
									name="form_subscribe"
								>
									<div className="col text-center">
										<input
											className="form-control"
											id="txt_subscribe"
											name="txt_subscribe"
											placeholder="Enter your email"
											type="text"
										/>{" "}
										<a href="#" id="btn-subscribe">
											<i className="arrow_right bg-color-secondary"></i>
										</a>
										<div className="clearfix"></div>
									</div>
								</form>
								<div className="spacer-10"></div>
								<small>Your email is safe with us. We don't spam.</small>
							</div>
						</div>
					</div>
				</div>
				<div className="subfooter">
					<div className="container">
						<div className="row">
							<div className="col-md-12">
								<div className="de-flex">
									<div className="de-flex-col">
										<a href="index.html">
											<img alt="" className="f-logo" src="images/logo-5.png" />
											<span className="copy">
												&copy; Copyright 2022 - Gigaland by Designesia
											</span>
										</a>
									</div>
									<div className="de-flex-col">
										<div className="social-icons">
											<a href="#">
												<i className="fa fa-facebook fa-lg"></i>
											</a>
											<a href="#">
												<i className="fa fa-twitter fa-lg"></i>
											</a>
											<a href="#">
												<i className="fa fa-linkedin fa-lg"></i>
											</a>
											<a href="#">
												<i className="fa fa-pinterest fa-lg"></i>
											</a>
											<a href="#">
												<i className="fa fa-rss fa-lg"></i>
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}

export default MainComponent;
