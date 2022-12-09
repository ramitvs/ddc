<style>
.main {
    margin: 0 auto;
    padding: 0 !important;
}
    .post__content p {
        line-height: 1.5;
        margin-bottom: 1.5rem;
    }
        .post__content p:first-of-type {
            font-size: 1.15em!important;
        }
    .post_title {
        font-family: ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji !important;
    }



    .post__content  a:not(.button):not(.link), p a:not(.button):not(.link) {
        font-weight: 400;
        position: relative;
        text-decoration: none;
        --text-opacity: 1;
        color: #1f292e;
        color: rgba(31,41,46,var(--text-opacity));
        border-bottom: 2px solid #c6c6c6;
        background-image: linear-gradient(90deg,#fff 50%,#1f292e 0);
        background-position: 0 0;
        background-size: 200%;
        transition: all .2s;
    }



        .post__content a:not(.button):not(.link):hover, p a:not(.button):not(.link):hover {
            --text-opacity: 1;
            color: white;
            background-position: -100%;
        }
    @media only screen and (max-width: 767px) {


        .post_title1 {
            font-size: 18px;
        }
        .pt-32 {
            padding-top: 6rem;
        }
    }



    .blog_image_normal img {
        margin-left: auto !important;
        margin-right: auto;
    }
</style>
<template>
    <Layout>
       

        <div class="post-title">
            <div class=" max-w-1200 w-full mx-auto px-6 pt-32 mb:pt-8" >

                <h1 class="post-title__text  pb-6 ">
                    <span class="post_title1 text-2xl font-semibold capitalise" style="margin-top:20px">{{ $page.post.title }}</span>                <span style="float: right; margin-right: 10px " class="text-yellow1" v-for="(category) in $page.post.categories"><a :href="category.path" :to="category.path"  class="capitalize brighter-teal max-w-1200 w-full  font-bold inline" v-text="category.title === 'guest-blog' ? 'Guest Blog' : category.title" > {{category.title}}</a></span>
                </h1>
            </div>
            </div>

        <div class="post content-box">
            <div class="post__header">
                <img alt="Cover image" v-if="$page.post.cover_image.src" :src="$page.post.cover_image.src" />
            </div>
            <div class="flex flex-col md:flex-row max-w-1200 w-full mx-auto pt-8 px-6">

                <div class="w-full md:w-4/6 ">
                    <div class="flex flex-col md:flex-row">
                        <div class="md:flex w-full max-w-1200 mb-4  bg-transparent">
                            <div class="flex flex-row">
                                <div class="w-32 mr-6">
                                    <a :href="$page.post.author.path" :to="$page.post.author.path">
                                        <img :src="$page.post.author.authorImage" style="border-radius: 50%;width:70px;height:70px" />
                                    </a>
                                </div>
                                <div class="w-full md:w-1/8 author_section">
                                    <a :href="$page.post.author.path" :to="$page.post.author.path">
                                        <p class="featured-author uppercase font-bold" v-text="$page.post.author.name" />
                                    </a>
                                    <p v-text="$page.post.author.position" class="font-normal" />
                                    <p v-text="$page.post.date" class="italic text-sm" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            <section>
                <div v-if="$page.post.title == 'The Distributed Cloud Requires a Distributed Data Platform'" class="blog_image_class post__content max-w-1200 mx-auto mt-4 mb-10 text-l px-6" v-html="$page.post.content" />
                <div v-else-if="$page.post.title == 'The Emergence of the Distributed Data Cloud'" class="blog_image_class post__content max-w-1200 mx-auto mt-4 mb-10 text-l px-6" v-html="$page.post.content" />
                <div v-else class="blog_image_normal post__content max-w-1200 mx-auto mt-4 mb-10 text-l px-6" v-html="$page.post.content" />

            </section>
            </div>

            <div class="post-comments">
                <!-- Add comment widgets here -->
            </div>

          
</Layout>
</template>
<script>
    import BaseSection from "../components/BaseSection.vue";
    export default {      
        components: {
            BaseSection,  
        },
    };
    </script>
<script>
    import SearchBlog from '~/components/SearchBlog.vue'
    export default {
        data: () => ({
            searchResults: null,
            featuredBlog: null,
            categories: [],
            toggle: false,
            menu: [
                {
                    label: 'Our Authors',
                    route: '/our-authors/'
                },
            ],
            showDrawer: false,
            searchFocus: false,
            openNav: false,
        }),
        metaInfo() {
            if (this.$page.post.title == "The Distributed Cloud Requires a Distributed Data Platform") {
                return {
                    link: [
                        { rel: 'canonical', href: 'https://www.yellowbrick.com/blog/the-distributed-cloud-requires-a-distributed-data-platform/' },
                    ],
                }
            }
             else if (this.$page.post.title == "The Emergence of the Distributed Data Cloud") {
                return {
                    link: [
                        { rel: 'canonical', href: 'https://www.yellowbrick.com/blog/the-emergence-of-the-distributed-data-cloud/' },
                    ],
                }
            }
            else if (this.$page.post.title == "The What, Why, and How of the Distributed Data Cloud") {
                return {
                    link: [
                        { rel: 'canonical', href: 'https://www.yellowbrick.com/blog/the-what-why-and-how-of-the-distributed-data-cloud/' },
                    ],
                }
            }
            },
        components: {
            SearchBlog
        },
        methods: {
            handleEvent(open) {
                window.location.href = open;
            },
            toggleDrawer(open) {
                this.showDrawer = open
                if (open) disableBodyScroll(this.$refs.drawer)
                else clearAllBodyScrollLocks()
            },
            searchClick() {
                var x = document.getElementById("search_div1");
                if (x.style.display === "none") {
                    x.style.display = "block";
                } else {
                    x.style.display = "none";
                }
            },
            clickAnywhere(e) {
                

            },
            pressAnything(e) {
                if (e.key === 'Escape') {
                    this.showDrawer = false
                    this.searchFocus = false
                    this.menu.forEach((item, x) => {
                        if (item.show) item.show = false
                    })
                }
            }
        },
        mounted() {
            document.addEventListener('click', this.clickAnywhere)
            document.addEventListener('keydown', this.pressAnything)
            document.addEventListener('scroll', this.scrollAnytime)
            if (this.$page?.allCategory?.edges?.length > 0) {
                this.featuredBlog = this.$page.allCategory.edges[0].node;
            }
            if (this.$page?.allCategory?.edges?.length > 0) {
                this.$page.allCategory.edges.forEach((category) => {
                    this.categories.push(category.node);
                })
                this.categories.sort(function (a, b) {
                    let optA = a.title.toUpperCase();
                    let optB = b.title.toUpperCase();
                    return (optA < optB) ? -1 : (optA > optB) ? 1 : 0;
                });
            }
        }
    }
</script>


<page-query>
    query Post ($id: ID!) {
    post: post (id: $id) {
    title
    path
    date (format: "DD MMM YYYY")
    timeToRead
    description
    content
    author {
    name
    authorImage
    id
    path
    position
    }
    categories {
    id
    title
    path
    }
    cover_image 
    }
    allCategory {
    edges {
    node {
    id
    title
    path
    }
    }
    }
    }
</page-query>

<style lang="scss">

.post-title {
  padding: calc(var(--space) / 2) 0 calc(var(--space) / 2);
}

    .post {

        &__header {
            width: calc(100% + var(--space) * 2);
            margin-left: calc(var(--space) * -1);
            margin-top: calc(var(--space) * -1);
            margin-bottom: calc(var(--space) / 2);
            overflow: hidden;
            border-radius: var(--radius) var(--radius) 0 0;

            img {
                width: 100%;
            }

            &:empty {
                display: none;
            }
        }

        .blog_image_class img {
            margin: auto;
            max-width: 100% !important;
            float: right;
            margin-left: 10px;
            margin-bottom: 20px;
        }





        @media only screen and (max-width: 600px) {
            .post-card__image {
                height: auto !important;
                width: 400px;
            }
        }

        ul {
            list-style: disc;
            margin-left: 30px !important;
            /* padding: 0; */
            font-size: 1.14em;
            color: var(--title-color);
            margin-bottom: 30px;
        }

        &__content {
            h2:first-child {
                margin-top: 0;
            }

            p {
                font-size: 1.15em;
                color: var(--title-color);
            }

            img {
                width: calc(100% + var(--space) * 2);
                margin-left: calc(var(--space) * -1);
                display: block;
                max-width: none;
            }
        }
    }

.post-comments {
  padding: calc(var(--space) / 2);

  &:empty {
    display: none;
  }
}

.post-author {
  margin-top: calc(var(--space) / 2);
}
</style>