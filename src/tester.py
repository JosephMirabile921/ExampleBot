import asyncio
import sys
from distest import TestCollector, TestInterface
from distest import run_dtest_bot

test_collector = TestCollector()
created_channel = None

@test_collector()
async def test_silence(interface):
    await interface.send_message(
        "since this does not begin with ?EXAMPLE, it should not register as a message"
        )
    await interface.ensure_silence()


if __name__ == "__main__":
    run_dtest_bot(sys.argv, test_collector)