import MasonImage from "@/components/MasonImage";
import Image from "next/image";

export default async function Home() {
  const images = [
    {
      type: "trash",
      key: "1684690899233",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/trash%2F1684690899233?alt=media&token=3bb4db4f-1d65-4b6f-9744-301d9eea72ee",
    },
    {
      type: "trash",
      key: "1684693263940",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/trash%2F1684693263940?alt=media&token=eb9bd868-420b-44f1-9bcb-6c6c9d40e752",
    },
    {
      type: "trash",
      key: "1684693706373",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/trash%2F1684693706373?alt=media&token=ea401b45-7ee6-43df-86e5-d7436f62969a",
    },
    {
      type: "trash",
      key: "1684761555286",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/trash%2F1684761555286?alt=media&token=8feb5862-d8b0-4e49-9cdd-280e025ec92f",
    },
    {
      type: "trash",
      key: "1685165018532",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/trash%2F1685165018532?alt=media&token=6926579b-36e6-4a06-96e5-3da06f4608a5",
    },
    {
      type: "trash",
      key: "1685395031876",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/trash%2F1685395031876?alt=media&token=eaf9ca7d-fd1b-4a20-809c-71391bb593ce",
    },
    {
      type: "trash",
      key: "1685395246199",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/trash%2F1685395246199?alt=media&token=1844204c-ecbd-4d1c-9dcd-b148894039b9",
    },
    {
      type: "trash",
      key: "1685715486049",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/trash%2F1685715486049?alt=media&token=ac96b4fd-68f7-4306-8790-c198f865a445",
    },
    {
      type: "biological",
      key: "1684553071890",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/biological%2F1684553071890?alt=media&token=d5df2c5f-ad9a-4054-bd9e-1a7f935ecdb5",
    },
    {
      type: "biological",
      key: "1684763350526",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/biological%2F1684763350526?alt=media&token=bff8f01c-3485-41f9-94a0-a4855f9d51d9",
    },
    {
      type: "biological",
      key: "1684955739754",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/biological%2F1684955739754?alt=media&token=f8d67e81-cdc8-4d38-b916-1648ea956f00",
    },
    {
      type: "biological",
      key: "1684955772735",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/biological%2F1684955772735?alt=media&token=558310db-200b-4112-9824-a70b781c80dd",
    },
    {
      type: "biological",
      key: "1685140776319",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/biological%2F1685140776319?alt=media&token=18ffd02a-7c2c-4547-94ba-3e68173c4c55",
    },
    {
      type: "biological",
      key: "1685407613640",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/biological%2F1685407613640?alt=media&token=bd96b49b-a17a-43ed-839b-54ba43571660",
    },
    {
      type: "biological",
      key: "1686495490817",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/biological%2F1686495490817?alt=media&token=792d1ccd-a435-420c-93c3-526dd25a4a22",
    },
    {
      type: "biological",
      key: "1686530939412",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/biological%2F1686530939412?alt=media&token=ab284a4c-f54a-4c21-8591-dd37d8f7099a",
    },
    {
      type: "biological",
      key: "1686530948524",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/biological%2F1686530948524?alt=media&token=cdd74d63-15d0-4710-b36f-406b9d881d4d",
    },
    {
      type: "biological",
      key: "1686531074376",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/biological%2F1686531074376?alt=media&token=38167785-7eb8-46d5-8e23-17d3afd12313",
    },
    {
      type: "biological",
      key: "1686531112981",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/biological%2F1686531112981?alt=media&token=873bec29-49a1-4ce1-b149-e319c9fc67da",
    },
    {
      type: "plastic",
      key: "1684553232619",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/plastic%2F1684553232619?alt=media&token=d226f6de-8650-4242-a0e2-84da5c0ca2c1",
    },
    {
      type: "plastic",
      key: "1684761688924",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/plastic%2F1684761688924?alt=media&token=367ee8dd-2cae-4e1a-9709-2c4c384354f7",
    },
    {
      type: "plastic",
      key: "1684958544112",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/plastic%2F1684958544112?alt=media&token=c673a711-6386-4589-bc73-d67817797a4b",
    },
    {
      type: "plastic",
      key: "1684958629640",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/plastic%2F1684958629640?alt=media&token=9d833b9b-f336-4f4d-bcfa-479c880dcacd",
    },
    {
      type: "plastic",
      key: "1685299524061",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/plastic%2F1685299524061?alt=media&token=4da5000f-4d41-470c-8dde-c940b1e90d45",
    },
    {
      type: "plastic",
      key: "1686370728017",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/plastic%2F1686370728017?alt=media&token=1206ea61-f13c-4c6c-a80d-eefce16f1749",
    },
    {
      type: "plastic",
      key: "1686531046829",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/plastic%2F1686531046829?alt=media&token=2f08200e-b828-4f24-9d3c-da2c87adf7b4",
    },
    {
      type: "plastic",
      key: "1686531233307",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/plastic%2F1686531233307?alt=media&token=6bdb3077-2e4d-45ac-b2fc-277184d2f67d",
    },
    {
      type: "paper",
      key: "1684552591900",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/paper%2F1684552591900?alt=media&token=6e040c1c-156b-4013-a01e-435528297128",
    },
    {
      type: "paper",
      key: "1684552815748",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/paper%2F1684552815748?alt=media&token=0d60e05f-7089-4bf5-b586-9c62deb8d75c",
    },
    {
      type: "paper",
      key: "1684586208043",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/paper%2F1684586208043?alt=media&token=76ca0a48-bd77-4ffd-afb6-0edaf613d6ad",
    },
    {
      type: "paper",
      key: "1684761494276",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/paper%2F1684761494276?alt=media&token=c7c4454d-5d42-42d7-becc-5eaff5548655",
    },
    {
      type: "paper",
      key: "1684761932115",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/paper%2F1684761932115?alt=media&token=ce2542a2-0a2d-437b-846c-6928be677359",
    },
    {
      type: "paper",
      key: "1684761974511",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/paper%2F1684761974511?alt=media&token=5a99486d-3113-466c-9bed-15054f356133",
    },
    {
      type: "paper",
      key: "1684762037061",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/paper%2F1684762037061?alt=media&token=f47a35f7-df5c-412f-bd93-5454c9dccc3c",
    },
    {
      type: "paper",
      key: "1684762087719",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/paper%2F1684762087719?alt=media&token=d5e447b5-fe61-4509-9512-a00503ea41fc",
    },
    {
      type: "paper",
      key: "1684762596714",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/paper%2F1684762596714?alt=media&token=e05e2b54-a540-4030-9264-8965467ba2fa",
    },
    {
      type: "paper",
      key: "1684867947574",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/paper%2F1684867947574?alt=media&token=ac4962b3-3e95-46c0-b3f9-a8218e2dfa63",
    },
    {
      type: "paper",
      key: "1684879060789",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/paper%2F1684879060789?alt=media&token=ded288af-6d87-4780-9ef6-8d26b6beb6f2",
    },
    {
      type: "paper",
      key: "1684879130011",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/paper%2F1684879130011?alt=media&token=ec1ab82a-cab8-4431-9409-0a31756f11e6",
    },
    {
      type: "paper",
      key: "1684880073386",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/paper%2F1684880073386?alt=media&token=6deeb585-9ad2-4d24-9b4e-a3e8a88e5f8e",
    },
    {
      type: "paper",
      key: "1684880245529",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/paper%2F1684880245529?alt=media&token=fc68928e-2f18-4b66-bae2-aa4afd1df1d9",
    },
    {
      type: "paper",
      key: "1684955693189",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/paper%2F1684955693189?alt=media&token=2e207b07-e18c-441b-8afc-18d18eee55b1",
    },
    {
      type: "paper",
      key: "1684960757065",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/paper%2F1684960757065?alt=media&token=186067d3-d34e-4b23-997a-3b871ba35c5e",
    },
    {
      type: "paper",
      key: "1684960799963",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/paper%2F1684960799963?alt=media&token=6ac6447a-f899-4cb5-9aba-9bacffe7835f",
    },
    {
      type: "paper",
      key: "1685014936733",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/paper%2F1685014936733?alt=media&token=73126d7c-0800-4973-a46b-1afe771d8546",
    },
    {
      type: "paper",
      key: "1685033053160",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/paper%2F1685033053160?alt=media&token=edd0dba4-023d-4de9-8487-2c7811cc0ea4",
    },
    {
      type: "paper",
      key: "1685164946564",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/paper%2F1685164946564?alt=media&token=ddd90f5d-279a-4b71-8cb9-ff9a5f094d16",
    },
    {
      type: "paper",
      key: "1685164986639",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/paper%2F1685164986639?alt=media&token=12a1bdf3-4117-48b2-8419-6f487cf5d453",
    },
    {
      type: "paper",
      key: "1685215771951",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/paper%2F1685215771951?alt=media&token=89e94f54-b79d-418b-aa0f-d81f7a229619",
    },
    {
      type: "paper",
      key: "1685216030854",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/paper%2F1685216030854?alt=media&token=5da2b1b2-0c86-4089-81df-c0bc9c4beb3c",
    },
    {
      type: "paper",
      key: "1685389216388",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/paper%2F1685389216388?alt=media&token=fb119742-645f-4ae3-81e2-75edf6e47c3c",
    },
    {
      type: "paper",
      key: "1685389243913",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/paper%2F1685389243913?alt=media&token=464b0051-0623-4235-9535-2406804e8f91",
    },
    {
      type: "paper",
      key: "1685389270946",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/paper%2F1685389270946?alt=media&token=8413e6d9-5f26-424a-8cc1-d1b158c4a3da",
    },
    {
      type: "paper",
      key: "1685395170870",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/paper%2F1685395170870?alt=media&token=9bad0aea-21ce-47c8-8800-194ee54f4aca",
    },
    {
      type: "paper",
      key: "1685395201481",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/paper%2F1685395201481?alt=media&token=ad801475-5947-4764-8d6e-7050605567f1",
    },
    {
      type: "paper",
      key: "1685445409833",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/paper%2F1685445409833?alt=media&token=4091bca2-73e4-41d1-b893-50fa1277ae20",
    },
    {
      type: "paper",
      key: "1685985968246",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/paper%2F1685985968246?alt=media&token=37615f9d-5ae3-4edb-ac8a-b35ef33366d1",
    },
    {
      type: "paper",
      key: "1685986102163",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/paper%2F1685986102163?alt=media&token=2e1ce663-6924-452d-8c73-9086fde816d1",
    },
    {
      type: "paper",
      key: "1686174820341",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/paper%2F1686174820341?alt=media&token=f89e953b-3a8b-405c-bd90-dcc1d8acf028",
    },
    {
      type: "paper",
      key: "1686175055800",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/paper%2F1686175055800?alt=media&token=6f368db8-1110-49b0-a626-ad7eade9b36b",
    },
    {
      type: "paper",
      key: "1686175787906",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/paper%2F1686175787906?alt=media&token=3374adca-fbd4-4d60-b13b-02c3dd82fc77",
    },
    {
      type: "paper",
      key: "1686175835519",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/paper%2F1686175835519?alt=media&token=31444657-ae71-4560-b635-0d0d859fb427",
    },
    {
      type: "paper",
      key: "1686190426014",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/paper%2F1686190426014?alt=media&token=c73b7f59-f134-4514-b63c-1c6f6257c95a",
    },
    {
      type: "paper",
      key: "1686190472276",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/paper%2F1686190472276?alt=media&token=71df1ecd-1d88-4e11-aee9-69802eb626b8",
    },
    {
      type: "paper",
      key: "1686190520215",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/paper%2F1686190520215?alt=media&token=d5a63a15-4678-4a1a-8784-ef78a12b572f",
    },
    {
      type: "paper",
      key: "1686190541807",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/paper%2F1686190541807?alt=media&token=6f361768-e8e1-49ee-93e9-b98ae8cf66a2",
    },
    {
      type: "paper",
      key: "1686343540226",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/paper%2F1686343540226?alt=media&token=fc42a1e3-3b4f-428b-8fd7-359ab0f1e93f",
    },
    {
      type: "paper",
      key: "1686344053543",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/paper%2F1686344053543?alt=media&token=eec87db6-ce5b-4f5d-a209-831a838c0c9b",
    },
    {
      type: "paper",
      key: "1686344061823",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/paper%2F1686344061823?alt=media&token=749832fe-4b9d-4b1a-8f13-f54d6ccc105c",
    },
    {
      type: "paper",
      key: "1686370306421",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/paper%2F1686370306421?alt=media&token=3e3a2413-1c04-4669-808b-e207f382ef67",
    },
    {
      type: "paper",
      key: "1686370741114",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/paper%2F1686370741114?alt=media&token=b9a8a5a6-3c04-442c-bf78-24a513656a40",
    },
    {
      type: "paper",
      key: "1686495500670",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/paper%2F1686495500670?alt=media&token=8dfc7afa-1312-4682-832d-f892480a10de",
    },
    {
      type: "paper",
      key: "1686531084319",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/paper%2F1686531084319?alt=media&token=6171ea77-6ab9-4d1b-8a08-6c27bd25b309",
    },
    {
      type: "paper",
      key: "1686531136330",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/paper%2F1686531136330?alt=media&token=923a92b5-0e17-45ec-bb8f-dfdcfcaf8474",
    },
    {
      type: "paper",
      key: "1686531143601",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/paper%2F1686531143601?alt=media&token=03fcb57d-e562-4e0e-b2b3-28218873d167",
    },
    {
      type: "paper",
      key: "1686531205554",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/paper%2F1686531205554?alt=media&token=05199765-8873-4f7a-b287-b824522401bf",
    },
    {
      type: "paper",
      key: "1686600308622",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/paper%2F1686600308622?alt=media&token=d1fc4729-37ad-474a-9e6f-e743c9cb70ae",
    },
    {
      type: "metal",
      key: "1684763273908",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/metal%2F1684763273908?alt=media&token=78f2bb94-80fe-454b-8713-92614e509986",
    },
    {
      type: "metal",
      key: "1684867981772",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/metal%2F1684867981772?alt=media&token=45cac03b-d17c-4490-9980-43dcc8367e3b",
    },
    {
      type: "metal",
      key: "1684868024321",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/metal%2F1684868024321?alt=media&token=e12f42a1-ed05-4b29-abfb-d4d2fb91884d",
    },
    {
      type: "metal",
      key: "1684958380102",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/metal%2F1684958380102?alt=media&token=b7613c56-0408-4657-aed4-6eb380c8b73d",
    },
    {
      type: "metal",
      key: "1684958470132",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/metal%2F1684958470132?alt=media&token=ed9a0994-8012-40ee-8d2f-0afe2ba0ceb9",
    },
    {
      type: "metal",
      key: "1684958498372",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/metal%2F1684958498372?alt=media&token=23a53c42-3940-4f2a-ba98-d859132ea00e",
    },
    {
      type: "metal",
      key: "1685213936766",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/metal%2F1685213936766?alt=media&token=fb86ba65-1cbe-4660-b466-035f4cfb28d5",
    },
    {
      type: "metal",
      key: "1685213947820",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/metal%2F1685213947820?alt=media&token=8f6b7e39-1dfa-4b6a-ab68-9403b16cafae",
    },
    {
      type: "metal",
      key: "1685213956385",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/metal%2F1685213956385?alt=media&token=a1af9f04-9bf9-4020-b2f4-a6a02b84fe47",
    },
    {
      type: "metal",
      key: "1685213984748",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/metal%2F1685213984748?alt=media&token=a0a79425-261d-41c3-b274-2b6fe04e3ed8",
    },
    {
      type: "metal",
      key: "1685213997792",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/metal%2F1685213997792?alt=media&token=54869a9b-e953-4653-82c0-8c56b54b0b32",
    },
    {
      type: "metal",
      key: "1685384871172",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/metal%2F1685384871172?alt=media&token=c085c69f-11a1-4cdd-a690-dde975cf8c9a",
    },
    {
      type: "metal",
      key: "1685385017041",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/metal%2F1685385017041?alt=media&token=89c8687f-4c70-4167-9dca-8d6d941fcf46",
    },
    {
      type: "metal",
      key: "1686174758015",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/metal%2F1686174758015?alt=media&token=b87c2c2d-0df7-4b79-a6b2-76fd8537e970",
    },
    {
      type: "metal",
      key: "1686175062910",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/metal%2F1686175062910?alt=media&token=ad0c596b-d3db-49c0-84c3-068877995440",
    },
    {
      type: "metal",
      key: "1686175107861",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/metal%2F1686175107861?alt=media&token=69ed47f8-9728-47c8-aa0a-53580fc77fc3",
    },
    {
      type: "metal",
      key: "1686342833542",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/metal%2F1686342833542?alt=media&token=fb6b6c23-a038-4a1b-a02f-3f5495ae1a8a",
    },
    {
      type: "metal",
      key: "1686370412209",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/metal%2F1686370412209?alt=media&token=96296d28-20ab-454d-853e-831e9430926f",
    },
    {
      type: "metal",
      key: "1686530974225",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/metal%2F1686530974225?alt=media&token=5fba8541-9bb8-4d74-aa52-774fc1a3478f",
    },
    {
      type: "metal",
      key: "1686531001059",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/metal%2F1686531001059?alt=media&token=c6f1e6c8-be89-4051-b269-9e0f6f014f15",
    },
    {
      type: "metal",
      key: "1686531009653",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/metal%2F1686531009653?alt=media&token=b3f8c951-6212-4234-998b-6dd8bd428182",
    },
    {
      type: "metal",
      key: "1686531101822",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/metal%2F1686531101822?alt=media&token=73b62cdf-8995-4802-853f-1126455b01d5",
    },
    {
      type: "metal",
      key: "1686531375442",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/metal%2F1686531375442?alt=media&token=b3094e19-e9ce-4148-832d-fb2bfa8184c9",
    },
    {
      type: "metal",
      key: "1686531385172",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/metal%2F1686531385172?alt=media&token=d625ee8b-6e1d-4d46-8c9a-becd95d0fdea",
    },
    {
      type: "metal",
      key: "1686531398539",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/metal%2F1686531398539?alt=media&token=6983976e-9b70-4597-aead-bc908d40a9b0",
    },
    {
      type: "metal",
      key: "1686531416613",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/metal%2F1686531416613?alt=media&token=6d4c732f-0d7b-4705-a22e-d7440312fb5f",
    },
    {
      type: "metal",
      key: "1686531442212",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/metal%2F1686531442212?alt=media&token=5f58940a-6990-4805-8779-0a15a4b7f148",
    },
    {
      type: "glass",
      key: "1684880308050",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/glass%2F1684880308050?alt=media&token=1f5473dc-3b85-4d77-a78a-9ce3d1674031",
    },
    {
      type: "glass",
      key: "1684958576805",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/glass%2F1684958576805?alt=media&token=641e6945-d65d-4849-b227-9add0632aa25",
    },
    {
      type: "glass",
      key: "1685145961119",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/glass%2F1685145961119?alt=media&token=5c8f3d7e-14ed-42a6-9152-bf41eb8cad6d",
    },
    {
      type: "glass",
      key: "1685213970187",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/glass%2F1685213970187?alt=media&token=361be978-7de3-4dac-b2eb-e8f1e3011bfd",
    },
    {
      type: "glass",
      key: "1685215684168",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/glass%2F1685215684168?alt=media&token=6f1d1de2-32cc-4e7c-a0dd-1ec504214f05",
    },
    {
      type: "glass",
      key: "1685385012244",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/glass%2F1685385012244?alt=media&token=12fb3e1d-40b8-4617-ae4e-e901ad8a9d44",
    },
    {
      type: "glass",
      key: "1685387532546",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/glass%2F1685387532546?alt=media&token=8bde8340-f88e-461c-8f09-9e1f2214daf1",
    },
    {
      type: "glass",
      key: "1685446705034",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/glass%2F1685446705034?alt=media&token=847723d6-ff75-4913-8d06-b143f666c5ce",
    },
    {
      type: "glass",
      key: "1686190362874",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/glass%2F1686190362874?alt=media&token=75bcb241-dc31-4978-88e9-152ae4eb79d3",
    },
    {
      type: "glass",
      key: "1686267208653",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/glass%2F1686267208653?alt=media&token=0404573d-a07c-49b7-9088-d19d2f2eac6c",
    },
    {
      type: "glass",
      key: "1686268492654",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/glass%2F1686268492654?alt=media&token=80adf134-1d22-40dd-95a4-97e15aa30514",
    },
    {
      type: "glass",
      key: "1686268540786",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/glass%2F1686268540786?alt=media&token=d30c1a25-9d80-4b70-858e-25597ec907ad",
    },
    {
      type: "glass",
      key: "1686269816056",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/glass%2F1686269816056?alt=media&token=3cbb6ace-ea25-420f-9d64-afc5163554e4",
    },
    {
      type: "glass",
      key: "1686269852791",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/glass%2F1686269852791?alt=media&token=39c08163-709a-427d-94a6-6e4067f2c997",
    },
    {
      type: "glass",
      key: "1686370731905",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/glass%2F1686370731905?alt=media&token=01012a6b-2d8d-4370-a109-3e82e548f6fa",
    },
    {
      type: "glass",
      key: "1686370735184",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/glass%2F1686370735184?alt=media&token=e5d13485-0023-4e54-8714-7c091ac80bfb",
    },
    {
      type: "glass",
      key: "1686524365218",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/glass%2F1686524365218?alt=media&token=c6c9e270-fa52-486a-8bfa-320cacbff3ef",
    },
    {
      type: "glass",
      key: "1686530964805",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/glass%2F1686530964805?alt=media&token=3e5612c1-5ba9-4740-b129-5f9f6b15718c",
    },
    {
      type: "glass",
      key: "1686530989382",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/glass%2F1686530989382?alt=media&token=b4eb694b-8024-4cf2-a6fe-6c698761af43",
    },
    {
      type: "glass",
      key: "1686531016622",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/glass%2F1686531016622?alt=media&token=e2872d35-53f5-42b5-b4c7-31269269748a",
    },
    {
      type: "glass",
      key: "1686531213842",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/glass%2F1686531213842?alt=media&token=6710b749-95cb-4e3e-b413-364c3fb4ad38",
    },
    {
      type: "glass",
      key: "1686531221728",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/glass%2F1686531221728?alt=media&token=d23f2d41-88eb-407d-9d2d-42c6d654c6e7",
    },
    {
      type: "glass",
      key: "1686531428076",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/glass%2F1686531428076?alt=media&token=dd8a6397-2ff3-47fb-aaad-f5f92e36a82d",
    },
    {
      type: "cardboard",
      key: "1684552936416",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/cardboard%2F1684552936416?alt=media&token=0c38fab9-53b5-4560-b960-6889b85dac11",
    },
    {
      type: "cardboard",
      key: "1684883867830",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/cardboard%2F1684883867830?alt=media&token=8497e6eb-7ab7-4f84-8ddd-3375e32cb292",
    },
    {
      type: "cardboard",
      key: "1685014978302",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/cardboard%2F1685014978302?alt=media&token=6a0fcb03-813f-48c2-be7c-0f6e352fda9b",
    },
    {
      type: "cardboard",
      key: "1685015009890",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/cardboard%2F1685015009890?alt=media&token=7151b5c9-bcd1-4c40-8f1e-d8b2e438f4c8",
    },
    {
      type: "cardboard",
      key: "1685033029707",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/cardboard%2F1685033029707?alt=media&token=568f589f-530b-4713-83b1-ef9681e3f029",
    },
    {
      type: "cardboard",
      key: "1685213854004",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/cardboard%2F1685213854004?alt=media&token=ba604391-d1be-498f-852d-69ec46f00b84",
    },
    {
      type: "cardboard",
      key: "1685387325714",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/cardboard%2F1685387325714?alt=media&token=f6e4a72b-59b0-4cec-8585-542b3b5cf28c",
    },
    {
      type: "cardboard",
      key: "1685387543428",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/cardboard%2F1685387543428?alt=media&token=3dd5bc8f-d3ce-4fd6-a877-66540e5be561",
    },
    {
      type: "cardboard",
      key: "1685387633722",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/cardboard%2F1685387633722?alt=media&token=99fa73f7-23c6-421c-bb47-0fdcf99f95f1",
    },
    {
      type: "cardboard",
      key: "1685388152848",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/cardboard%2F1685388152848?alt=media&token=2c39d440-e6f9-4a1d-bd4f-3aedf95bd24d",
    },
    {
      type: "cardboard",
      key: "1685395068010",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/cardboard%2F1685395068010?alt=media&token=f6d77438-d1cd-4528-b884-31f4f223fd11",
    },
    {
      type: "cardboard",
      key: "1685395106716",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/cardboard%2F1685395106716?alt=media&token=828badcc-9251-46f3-975f-0fe5d27b3001",
    },
    {
      type: "cardboard",
      key: "1686174939917",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/cardboard%2F1686174939917?alt=media&token=903f9d75-a492-4ef4-81db-f809a45fe067",
    },
    {
      type: "cardboard",
      key: "1686370919718",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/cardboard%2F1686370919718?alt=media&token=55eb6c84-8fe2-43a8-b765-132709be7ed2",
    },
    {
      type: "cardboard",
      key: "1686370972248",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/cardboard%2F1686370972248?alt=media&token=c26801b6-e416-447a-bcae-0d21d6ba5954",
    },
    {
      type: "cardboard",
      key: "1686396535701",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/cardboard%2F1686396535701?alt=media&token=aec24a62-c49a-4fbf-bf99-08fdab5a3156",
    },
    {
      type: "cardboard",
      key: "1686531152921",
      url: "https://firebasestorage.googleapis.com/v0/b/junk-judge.appspot.com/o/cardboard%2F1686531152921?alt=media&token=e5ecde06-46c1-4d8c-bbab-dc86b621b7f2",
    },
  ];

  const divider = Math.floor(images.length / 4);
  const col1 = images.slice(0, divider);
  const col2 = images.slice(divider, divider * 2);
  const col3 = images.slice(divider * 2, divider * 3);
  const col4 = images.slice(divider * 3, images.length);

  return (
    <div className="p-10 flex w-full flex-col items-center">
      <h1 className="lg:text-8xl md:text-6xl text-5xl">
        Junk Judge - A place to <span className="underline">judge</span> <br />
        <span className="underline">your junk</span>. <br />
      </h1>
      <div className="w-full">
        <Image
          src="/assets/logo.png"
          alt="Junk Judge"
          width={500}
          height={500}
        />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="grid gap-4 text-white">
          {col1.map((image: any) => (
            <MasonImage src={image.url} key={image.key} type={image.type} />
          ))}
        </div>
        <div className="grid gap-4">
          {col2.map((image: any) => (
            <MasonImage src={image.url} key={image.key} type={image.type} />
          ))}
        </div>
        <div className="grid gap-4">
          {col3.map((image: any) => (
            <MasonImage src={image.url} key={image.key} type={image.type} />
          ))}
        </div>
        <div className="grid gap-4">
          {col4.map((image: any) => (
            <MasonImage src={image.url} key={image.key} type={image.type} />
          ))}
        </div>
      </div>
    </div>
  );
}
